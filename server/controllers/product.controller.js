const Product = require('../models/product.model')

/**
 * Controller method to create a new product
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const createProduct = async (req, res) => {
  const {
    name,
    type,           
    price,
    thumbnail,  
    images,
    description,
    stockQuantity,
    category,
    ratings,
    discount,
  } = req.body;

  try {
    const newProduct = new Product({
      name,
      type,
      price,
      thumbnail,
      images,
      description,
      stockQuantity,
      category,
      ratings,
      discount,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: savedProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createProduct,
};
