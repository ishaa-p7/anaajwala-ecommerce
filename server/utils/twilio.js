const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const twilio = require("twilio"); 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = twilio(accountSid, authToken);

// client.messages.create({
//     body: 'Hello from Twilio!',
//     from: 'whatsapp:+14155238886', // Replace with your Twilio number
//     to: 'whatsapp:+917999624503'    // Replace with the recipient's number
// })
// .then(message => console.log('Message SID:', message.sid))
// .catch(error => console.error('Error:', error));

module.exports = client