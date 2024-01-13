import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const q = "SELECT * FROM customers WHERE Email = ?";

  db.query(q, [req.body.Email], (err, data) => {
    if (err) return res.json(err);
    if (data.lenght) return res.status(409).json("User already exists");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.PasswordHash, salt);

    const q =
      "INSERT INTO customers(`FirstName`, `LastName`, `Email`, `PasswordHash`) VALUES (?)";
    const values = [
      req.body.FirstName,
      req.body.LastName,
      req.body.Email,
      hash,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).jsnon("User has been created.");
    });
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
