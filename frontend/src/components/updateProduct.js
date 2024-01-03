import React, { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
const UpdateProduct=()=>{
    
   const [name,setProductName]=React.useState('');
   const [price,setPrice]=React.useState('');
   const [category,setCategory]=React.useState('');
   const [company,setCompany]=React.useState(''); 
   const params = useParams();
    const navigate=useNavigate();

   useEffect(()=>{
    getProduct();
    console.log(params);
   },[])

  const getProduct=async()=>{
    let result=await fetch(`http://localhost:5000/getProductById/${params.id}`);
    if(result){
        result =await result.json();
        console.log(result);
        setCompany(result.price);
        setCategory(result.category);
        setProductName(result.name);
        setPrice(result.company)
    }
   }

   const updateProduct=async()=>{
    let result =await fetch(`http://localhost:5000/update-product/${params.id}`,{
        method:'put',
        body:JSON.stringify({name,price,company,category}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await result.json();
    console.log(result);
    navigate('/')
   }
   
    return(
        <>
        <h1>Update Product</h1>

        <input type="text" placeholder="Product Name" onChange={(e)=>setProductName(e.target.value)} value={name}/><br/><br/>
        <input type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} value={price}/><br/><br/>
        <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)} value={category}/><br/><br/>
        <input type="text" placeholder="Company" onChange={(e)=>setCompany(e.target.value)} value={company}/><br/><br/>

        <button onClick={updateProduct}>Save</button>
        </>
    )
}

export default UpdateProduct;