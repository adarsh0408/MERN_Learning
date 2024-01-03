import React, { useState } from "react";

const AddProduct=()=>{
    
   const [name,setProductName]=useState('');
   const [price,setPrice]=useState('');
   const [category,setCategory]=useState('');
   const [company,setCompany]=useState(''); 
   const addProduct=async ()=>{
    const auth = localStorage.getItem('user');
    let useId =JSON.parse(auth)._id;
    console.log(auth,useId);
    let addProduct =await fetch("http://localhost:5000/add-product",{
        method:'post',
        body:JSON.stringify({name,price,category,company,useId}),
        headers:{
            'Content-Type':'application/json'
        }
        })
        let result = await addProduct.json();
        console.log(result);
   }
   
    return(
        <>
        <h1>Add Product</h1>

        <input type="text" placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)} value={name}/><br/><br/>
        <input type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} value={price}/><br/><br/>
        <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)} value={category}/><br/><br/>
        <input type="text" placeholder="Company" onChange={(e)=>setCompany(e.target.value)} value={company}/><br/><br/>

        <button onClick={addProduct}>Save</button>
        </>
    )
}

export default AddProduct;