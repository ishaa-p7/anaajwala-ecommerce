const User = require("../models/user.model.js");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_STRING);
    
    console.log("database connected");
}

async function addFieldToCollection() {


    try {
        // Update all users to add the role field with the value "user"
        const result = await User.updateMany({}, { $set: { role: 'user' } });
        console.log(`Successfully updated ${result.nModified} users`);
    } catch (error) {
        console.error('Error updating users:', error);
    }
}

addFieldToCollection()