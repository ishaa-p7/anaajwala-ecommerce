const User = require('../models/user.model')
const { Product } = require('../models/product.model')
const Order = require('../models/order.model')

const getInfo = async (req, res, next) => {
    try {

        const [users, orders, products] = await Promise.all([
            User.find({}),
            Order.find({}),
            Product.find({}),
        ]);
        
        res.json({users , orders, products});

    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    getInfo
}