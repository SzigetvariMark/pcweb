import { Order } from "@models/Order";
import { isAdminRequest } from "./auth/[...nextauth]";

const { mongooseConnect } = require("@lib/mongoose");

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req, res);

  const { method } = req;

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Order.findOne({ _id: req.query?.id }));
    } else {
      res.json(await Order.find());
    }
  }
}
