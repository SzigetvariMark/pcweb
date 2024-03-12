import { mongooseConnect } from "@lib/mongoose";
import { Order } from "@models/Order";
import { Product } from "@models/Product";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("POST kérésnek kell lennie");
    return;
  }
  await mongooseConnect();
  const { name, email, phone, city, address, floor, door, postal, products } =
    req.body;
  const productsIds = products.split(",");
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const info = productsInfos.find((p) => p._id.toString() === productId);
    const quantity = productsIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && info) {
      line_items.push({
        quantity,
        price_data: {
          currency: "hu-HU",
          product_data: { name: info.title },
          unit_amount: quantity * info.price,
        },
      });
    }
  }
  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    phone,
    city,
    address,
    floor,
    door,
    postal,
    paid: false,
  });
}
