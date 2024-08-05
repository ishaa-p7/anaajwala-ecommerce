const Order = require('../models/order.model.js')
const User = require('../models/user.model.js')
const Product = require('../models/product.model.js')


/**
 * Controller method to create a new order
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
const createOrder = async (req, res) => {
  const {
    customerName,
    customerPhoneNo,
    address,
    pincode,
    items, // Array of items with productId, quantity, and price
    paymentMethod,
    orderNotes
  } = req.body;
  
  try {
    // Validate the items array
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Items array is required and cannot be empty' });
    }

    // Calculate total price
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    // Create a new order object
    const newOrder = new Order({
      customerName,
      customer_phone_no: customerPhoneNo,
      address,
      pincode,
      customerId: req.userId, // Retrieved from the auth middleware
      status: 'pending',
      paymentMethod,
      paymentStatus: 'pending',
      totalPrice,
      deliveryDate: null, // Assuming delivery date is not known at the time of order creation
      orderNotes,
      items
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    res.status(201).json({ message: 'Order created successfully', order: savedOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createOrder
};
