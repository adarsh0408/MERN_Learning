import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
const AllProducts=()=>{
    const [products,setProducts]=useState([]);
    const [key,setKey]=useState('');

    useEffect(()=>{
        getProducts();
    },[])

   const getProducts=async ()=>{
    let result =await fetch("http://localhost:5000/get-product");
    result =await result.json();
    setProducts(result)    
    }

    const deleteProduct= async (id)=>{
        console.log(id);
        let result = await fetch(`http://localhost:5000/delete-product/${id}`,{
            method:'delete',
            headers:{
                'Content-Type':'application/json'
            }
        });
          if(result){
            result = await result.json();
            getProducts();
            alert("Deleted")
        }
    }

    const searchProduct =async (event)=>{
        let key = event.target.value;
        console.log(key);
        if(key){
            let result =await fetch(`http://localhost:5000/search/${key}`);
            result=await result.json();
            setProducts(result)
        }else{
            getProducts()
        }
       
    }
    return(
        <>
        <h1>Product List</h1>
        <input placeholder="Search Product" onChange={searchProduct} />
        <table style={{width:"100%"}}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Company</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
            </thead>
            <tbody>
           {
           products.length>0? products.map((item,index)=>
          
                <tr key={item._id}>
                <td>{item.name}</td>
                <td>&#x20B9; {item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td onClick={()=>deleteProduct(item._id)} style={{cursor:"pointer"}}>delete</td>
                <td ><Link to={`/update/${item._id}`}>Update</Link></td>
            </tr>
         
            ):<h1>No result found</h1>
           }
              </tbody>
        </table>
        </>
    )
}

export default AllProducts;