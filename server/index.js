
const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const AuthRouter = require('./routes/auth.route.js')
const UserRouter = require('./routes/user.route.js')
const OrderRouter = require('./routes/order.route.js')
const path = require('path')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000;


main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/anaaj-wala');
  await mongoose.connect(process.env.MONGO_STRING);
}

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth' , AuthRouter);
app.use('/api/user' , UserRouter);
app.use('/api/order' , OrderRouter);

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})


app.use((err , req , res , next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "kuch to gadbad he daya";
  const type = err.message || "";

  return res.status(statusCode).json({
      success : false,
      statusCode,
      message,
      type
  })
})


app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})