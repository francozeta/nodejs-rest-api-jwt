import Product from '../models/Product.js'

export const createProduct = async (req, res) => {
  const { name, category, price, imgUrl } = req.body;
  const newProduct = new Product({name, category, price, imgUrl});
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
}

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products)
}

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
}

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findOneAndUpdate(
    { _id: req.params.productId },
    req.body, 
    { new: true }
  );
  res.status(200).json(updatedProduct);
}

export const deleteProductById = async (req, res) => {
  const { productId } = req.params
  await Product.findByIdAndDelete(productId);
  res.status(204).json();
}