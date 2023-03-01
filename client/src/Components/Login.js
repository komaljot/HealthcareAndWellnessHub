import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login=()=>{
   const [initial, setInitital] = useState({
    Username:'',
    Password:''
   });
const changeHandler=e=>{
    setInitital({...initial,[e.target.name]:e.target.value})
    console.log(initial)
}

    return(
        <div className="text-center my-5">
            <h2 className="my-5">Login</h2>
            <br />
            <form action="">
            <input type="text" placeholder="Username" onChange={changeHandler} name='Username'/>
            <br /><br />
            <input type="password" placeholder="Password" onChange={changeHandler} name='Password'/>
            <br /><br />
            </form>
            <button>Login</button>
            <br /><br />
            <Link to="/">Sign Up Page </Link>
        </div>
    )
}
export default Login