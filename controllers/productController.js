import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveProduct = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    image: req.file.path,
    price: req.body.price,
  });
  try {
    const savedProduct = await product.save();
    console.log(req.file);
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const cekId = await Product.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          image: req.file.path,
          price: req.body.price,
        },
      }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const cekId = await Product.findById(req.params.id);
  if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
  try {
    const deletedProduct = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
