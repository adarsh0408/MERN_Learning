const express = require('express');

app = express();

app.get('/',(req,res)=>{
    res.send("App is running")
});

app.listen(3000);