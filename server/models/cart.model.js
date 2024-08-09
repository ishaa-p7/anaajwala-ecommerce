const mongoose = require('mongoose');
const { Schema } = mongoose;
import { productSchema } from './product.model';


// Define the cart item schema
const cartItemSchema = new Schema({
    product: {
        type: productSchema,  // Embedded product schema
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1  // Ensure quantity is at least 1
    },
    type: {
        type: String,
        enum: ['gold', 'platinum', 'diamond'],
        required: true
    }
});

// Define the cart schema
const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true
    },
    items: [cartItemSchema]  // Array of cart items
}, {
    timestamps: true  // Automatically add createdAt and updatedAt fields
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;