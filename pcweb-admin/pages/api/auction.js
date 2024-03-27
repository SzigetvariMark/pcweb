import { mongooseConnect } from "@lib/mongoose";
import { Auction } from "@models/AuctionProduct";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Auction.findOne({ _id: req.query.id }));
    } else {
      res.json(await Auction.find());
    }
  }

  if (method === "POST") {
    const { title, description, price, images, endDate } = req.body;
    const AuctionDoc = await Auction.create({
      title,
      description,
      price,
      images,
      endDate,
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
