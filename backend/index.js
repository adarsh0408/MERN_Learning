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

app.get('/get-product',async (req,res)=>{
    let produts =await Product.find();
    if(produts){
        res.send(produts);
    }else{
        res.send("Product not found")
    }
})

app.get('/getProductById/:id', async (req, res) => {
    try {
      const product = await Product.findOne({ _id: req.params.id });
  
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: "No record found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.put('/update-product/:id',async(req,res)=>{
    let updateProduct = await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
        );
    res.send(updateProduct);
  });

  app.get('/search/:key',async(req,res)=>{
    let result = await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            // {price:{$regex:req.body.params}},
            {category:{$regex:req.params.key}}
        ]
    });
    // result=await result.json()
    res.send(result)
  })

app.delete('/delete-product/:id',async (req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id});
    res.send(result);
})

app.listen(5000,()=>{
    console.log("server is running on 5000");
});