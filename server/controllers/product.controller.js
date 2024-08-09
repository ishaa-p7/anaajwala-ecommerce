const {Product} = require('../models/product.model');
const { errorhandler } = require('../utils/error');

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

const getProduct = async (req , res , next)=>{
  try {
    const {id} = req.params
    const product = await Product.findById(id)
    if(!product){
      return next(errorhandler(404 , "Product does not exist, might've be deleted" , "product not found"))
    }
    res.json(product)
  } catch (error) {
    console.log(error);
    
    next(error)
  }
}

const getAllProducts = async (req , res , next)=>{
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createProduct,
  getProduct,
  getAllProducts
};
