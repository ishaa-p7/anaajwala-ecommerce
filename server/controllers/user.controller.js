const User = require("../models/user.model.js")
const { errorhandler } =  require("../utils/error.js")
const bcryptjs = require('bcryptjs')

/**
 * 
 *  function responds with userDoc for the given id
 *  coming from request parameters.
 */
const getUser = async (req, res, next) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) return next(errorhandler(404, 'User not found!'));

        const { password: pass, ...rest } = user._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

/**
 * This Function takes cookie from the request and responds with a userDocument to the frontend.
 * 
 * @param {*} req request has req.userId which is added by isLoggedin() middleware
 * @param {*} res responds with userDocument after removing password
 * @param {*} next to pass on errors
 * 
 */
const profile = async(req , res , next)=>{

    try {
        const user = await User.findById(req.userId);
        const { password: pass, ...rest } = user._doc;
        res.status(200).json(rest)
    } catch (error) {
        next(error)
    }
}

const getOrders = async (req , res , next)=>{
    try {
        // console.log(req.userId);
        // console.log("req came");
        
        //_id was there as well, therefore have to destructure
        const {orders} = await User.findById(req.userId).populate('orders').select('orders');
        res.json(orders);

    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    getUser,
    profile,
    getOrders,
}