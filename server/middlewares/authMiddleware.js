const { errorhandler } = require("../utils/error.js");
const jwt = require('jsonwebtoken')

//It will populate req with user 
const isLoggedIn = (req , res , next)=>{

    const token = req.cookies.access_token;

    if(!token){
        return next(errorhandler(401 , 'Unauthorized'));
    }

    jwt.verify(token , process.env.JWT_SECRET , (err , user)=>{
        if(err) return next(errorhandler(403 , 'Forbidden'))
            req.userId = user.id;
            next()
        })
    }
        

module.exports =  {
    isLoggedIn,
}