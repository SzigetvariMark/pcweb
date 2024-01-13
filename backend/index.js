import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);

app.listen(8800, () => {
  console.log("Connected");
});
