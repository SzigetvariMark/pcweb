import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*RvMMQDDsw&qW3JXpyb&",
  database: "pcwebshop",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/products", (req, res) => {
  const q =
    "INSERT INTO products (`ProductName`, `Description`, `Price`, `QuantityInStock`, `Specifications`, `Images`) VALUES (?)";
  const values = [
    req.body.ProductName,
    req.body.Description,
    req.body.Price,
    req.body.QuantityInStock,
    req.body.Specifications,
    req.body.Images,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Product has been created successfully.");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
