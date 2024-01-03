import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const LogInComponent =()=>{
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
    const login= async ()=>{
        let loginData = await fetch("http://localhost:5000/login",{
            method:'post',
            body:JSON.stringify({email,pass}),
            headers:{
                'Content-Type':'application/json'
            }

        })
        let data = await loginData.json();
        console.log(data);
        if(data.name){
            localStorage.setItem("user",JSON.stringify(data));
            navigate('/');
        }else{
            console.log("user not found");
        }
    
    }
    return(
        <div>
            <h1>LogIn Components</h1>

            <input placeholder="Email" type="email" className="signUpInput" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input placeholder="Password" type="Password" className="signUpInput" onChange={(e)=>setPass(e.target.value)} value={pass}/>

            <button style={{padding: "10px 35px"}} onClick={login}>Login</button>
        </div>
    )
}

export default LogInComponent;