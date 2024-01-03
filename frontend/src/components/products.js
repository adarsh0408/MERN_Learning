import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
const AllProducts=()=>{
    const [products,setProducts]=useState([]);

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
    return(
        <>
        <h1>Product List</h1>
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
            products.map((item,index)=>
          
                <tr key={item._id}>
                <td>{item.name}</td>
                <td>&#x20B9; {item.price}</td>
                <td>{item.category}</td>
                <td>{item.company}</td>
                <td onClick={()=>deleteProduct(item._id)} style={{cursor:"pointer"}}>delete</td>
                <td ><Link to={`/update/${item._id}`}>Update</Link></td>
            </tr>
         
            )
           }
              </tbody>
        </table>
        </>
    )
}

export default AllProducts;