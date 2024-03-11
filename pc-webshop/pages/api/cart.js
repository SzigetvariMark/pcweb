import { mongooseConnect } from "@lib/mongoose";
import { Product } from "@models/Product";
import User from "@models/user";

export default async function handle(req, res) {
  await mongooseConnect();
  const { method } = req;
  const ids = req.body.ids;

  res.json(await Product.find({ _id: ids }));
}
