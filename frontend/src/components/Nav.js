import React,{useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom'
import SignUp from "./SignUp";

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/register')
    }
    return(
        <div>
            <ul className="nav-ul">
                {
                    auth?<>
                     <li> <Link to='/'>Products</Link></li>
                <li> <Link to='/add'>Add Product</Link></li>
                <li> <Link to='/update'>Update Product</Link></li>
                <li> <Link to='/profile'>Profile</Link></li>
                <li><Link to='/register' onClick={logout}>Logout {JSON.parse(auth).name}</Link></li>
                    </>:<><li> <Link to='/logIn'>Login</Link> </li>
                    
                    <li><Link to='/register'>Register</Link></li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Nav;