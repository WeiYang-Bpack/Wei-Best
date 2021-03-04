const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errors');
const bodyparser = require('body-parser')
const cloudinary = require('cloudinary');

app.use(express.json());
app.use(cookieParser())
app.use(bodyparser.urlencoded({extended: true}));


//setup CLOUDINARY
cloudinary.config({
	cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
})


//Import all routes
const products = require('./routes/productRoutes');
const auth = require('./routes/authRoutes');
const order = require('./routes/orderRoutes');
app.use('/api/v1' , products);

app.use('/api/v1' , auth);

app.use('/api/v1', order)

app.use(errorMiddleware);

module.exports = app;