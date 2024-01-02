const mongoose = require('mongoose');

const connectDB = async ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/E-Comm');
    // const productSchema = new mongoose.Schema({});
    // const product = mongoose.model('Product',productSchema);
    // const data = await product.find();
    // console.log(data);
} 
connectDB();