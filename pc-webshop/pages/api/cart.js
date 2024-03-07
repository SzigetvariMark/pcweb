import { mongooseConnect } from "@lib/mongoose";
import { Product } from "@models/Product";
import User from "@models/user";

export default async function handle(req, res) {
  await mongooseConnect();
  const { method, body } = req;
  const ids = req.body.ids;

  res.json(await Product.find({ _id: ids }));

  if (method === "PUT") {
    const { phone, address, floor, door, _id } = body;
    try {
      const updates = {};
      if (phone) updates.phone = phone;
      if (address) updates.address = address;
      if (floor) updates.floor = floor;
      if (door) updates.door = door;

      await User.updateOne({ _id }, { $set: updates });
      res.json(true);
    } catch (error) {
      console.error("Error updating user", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating user information" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
