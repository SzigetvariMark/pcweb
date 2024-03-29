import { mongooseConnect } from "@lib/mongoose";
import { Order } from "@models/Order";
import { Product } from "@models/Product";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === "POST") {
    const { title, description, price, images, category, amount } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
      images,
      category,
      amount,
    });
    res.json(productDoc);
  }

  if (method === "PUT") {
    const { title, description, price, images, category, amount, _id } =
      req.body;
    await Product.updateOne(
      { _id },
      { title, description, price, images, category, amount }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    const { _id } = req.query;
    await Order.deleteOne({ _id });
    res.json("ok");
  }
}
