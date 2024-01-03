const express = require('express');
require('./db/config');
const user = require('./db/user');
const cors = require('cors');
const Product = require('./db/product');



app = express();
app.use(express.json());
app.use(cors());

app.post('/register',async (req,res)=>{
    let userSignUp = new user(req.body);
    let result = await userSignUp.save();
    res.send(result);
})

app.post('/login',async (req,res)=>{
    if (req.body.email && req.body.pass){ let userData = await user.findOne(req.body).select('-pass');
    if(userData){
        res.send(userData);
    }else{
        res.send("user not found")
    }}else{
        res.send('Email or pass. is incorrect')
    }   
})

app.post('/add-product',async (req,res)=>{
    let product = new Product(req.body);
    let result =  await product.save();
    res.send(result);
})

app.listen(5000,()=>{
    console.log("server is running on 5000");
});