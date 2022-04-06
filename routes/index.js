import express from "express";

import {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const route = express.Router();

route.get("/", getProducts);
route.get("/:id", getProductById);
route.post("/", saveProduct);
route.patch("/:id", updateProduct);
route.delete("/:id", deleteProduct);

export default route;
