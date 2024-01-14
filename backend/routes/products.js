import express from "express";
import { getProduct, getProducts } from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

export default router;
