import { mongooseConnect } from "@lib/mongoose";
import { Auction } from "@models/AuctionProduct";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Auction.findOne({ _id: req.query.id }));
    } else {
      res.json(await Auction.find());
    }
  }

  if (method === "POST") {
    const { title, description, price, images } = req.body;
    const AuctionDoc = await Auction.create({
      title,
      description,
      price,
      images,
    });
    res.json(AuctionDoc);
  }

  if (method === "PUT") {
    const { title, description, price, images, _id } = req.body;
    await Auction.updateOne({ _id }, { title, description, price, images });
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query.id) {
      await Auction.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
}
