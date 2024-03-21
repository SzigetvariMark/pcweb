import { Order } from "@models/Order";

const { mongooseConnect } = require("@lib/mongoose");

export default async function handle(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Order.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Order.find());
    }
  }
}
