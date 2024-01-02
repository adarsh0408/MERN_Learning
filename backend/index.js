const express = require('express');
require('./db/config');
const user = require('./db/user');
const cors = require('cors');

app = express();
app.use(express.json());
app.use(cors());

app.post('/register',async (req,res)=>{
    let userSignUp = new user(req.body);
    let result = await userSignUp.save();
    res.send(result);
})

app.listen(5000,()=>{
    console.log("server is running on 5000");
});