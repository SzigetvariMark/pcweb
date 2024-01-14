import { db } from "../db.js";

export const getProducts = (req, res) => {
  const q = req.body.Cat
    ? "SELECT * FROM products WHERE Cat=?"
    : "SELECT * FROM products";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getProduct = (req, res) => {};
