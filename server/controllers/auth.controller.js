const User = require("../models/user.model.js")
const bcryptjs = require("bcryptjs")
const { errorhandler } = require("../utils/error.js")
const jwt = require("jsonwebtoken")


// import admin from 'firebase-admin'

// import serviceAccount from '../firebase_service_account.json' assert { type: "json" }

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// });

const signup = async (req, res, next) => {

    const { username, email, password , phone_no} = req.body;
    // console.log(req.body);
    
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const maxAge = 3 * 24 * 60 * 60

    try {
        const newUser = new User({ username, email,phone_no, password: hashedPassword , saved:[] , orders:[]})
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET , {expiresIn : maxAge })
        await newUser.save()
        res
            .cookie('access_token', token, { httpOnly: true , maxAge : maxAge*1000 })
            .status(201).json(newUser)
    } catch (error) {
        next(error)
        console.log(error);
        
    }
}

const signin = async (req, res, next) => {
    const { username, password } = req.body;
    const maxAge = 3 * 24 * 60 * 60

    try {
        const validUser = await User.findOne({ username })
        if (!validUser) {
            return next(errorhandler(404, 'User not found'))
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorhandler(401, "Wrong credentials"))

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET , {expiresIn : maxAge})
        const { password: pass, ...rest } = validUser._doc;
        //rest is the entire document except the password

        res
            .cookie('access_token', token, { httpOnly: true , maxAge : maxAge*1000 })
            .status(200)
            .json(rest)

    } catch (error) {
        next(error)
    }
}


/**
 * @class
 * @ignore
 */
const google = async (req, res, next) => {
    try {

        // if (req.body.idToken) {
        //     // Verify the ID token provided by the client
        //     //will throw error if wrong or incorrect idToken
        //     const decodedToken = await admin.auth().verifyIdToken(req.body.idToken);
        // } else {
        //     next(errorhandler(404, "idToken missing"))
        // }

        const user = await User.findOne({ username: req.body.email });

        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = user._doc;
            res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(rest);
        } else {
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                username:
                    req.body.name.split(' ').join('').toLowerCase() +
                    Math.random().toString(36).slice(-4),
                email: req.body.email,
                password: hashedPassword,
                avatar: req.body.photo,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = newUser._doc;
            res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(rest);
        }
    } catch (error) {
        next(error);
    }
};

const signOut = async (req, res, next) => {
    try {
        res.clearCookie('access_token');
        res.status(200).json('User has been logged out!');
    } catch (error) {
        next(error);
    }
};

module.exports =  {
    signup,
    signin,
    google,
    signOut,
}