import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const SignUp =()=>{
    useEffect(()=>{
       const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    
    })
   
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const navigate = useNavigate();

    const signUpData= async ()=>{
        console.log(name,email,pass)
        let result =await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,pass}),
            headers:{
                'Content-Type':'application/json'
            },
        });
       let data = await result.json();
       console.log(data); 
      localStorage.setItem("user",JSON.stringify(result));
       navigate('/');
    }
    return(
        <div className="SignUp">
            <h1>Register</h1>
            <input placeholder="Name" type="text" className="signUpInput" onChange={(e)=>setName(e.target.value)} value={name}/>

            <input placeholder="Email" type="email" className="signUpInput" onChange={(e)=>setEmail(e.target.value)} value={email}/>

            <input placeholder="Password" type="password" className="signUpInput"onChange={(e)=>setPass(e.target.value)} value={pass}/>

            <button style={{padding: "10px 35px"}} onClick={signUpData}>Sign Up</button>
        </div>
    )
}

export default SignUp;