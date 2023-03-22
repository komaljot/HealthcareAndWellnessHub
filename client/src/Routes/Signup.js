import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
const SignUp=()=>{
    const [Value, setValue] = useState({
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
    });
const changes=e=>{
    setValue({...Value,[e.target.name]:e.target.value})
    console.log(Value)
}


const handleSignup=()=>{
    // fetch('http://localhost:3000/register',{
    //   method:'POST',
    //   headers:{
    //     'Content-type':'application/json'
    //   },
    //   body:JSON.stringify(input)
    // }).then(()=>{
    //   console.log('CHAL gya')
    //   navigate('/login')

    // }).catch((err)=>{
    //   console.log(err,"errr")
    // })
   }

    return(
        <div className='text-center my-5'>
            <h2 className='my-5'>Sign Up</h2>
            <form action="">
            <input type="text"  placeholder='First Name' onChange={changes} name='FirstName'/>
            <br />
            <br /> 
            <input type="text"  placeholder='Last Name' onChange={changes} name='LastName'/>
            <br />
            <br />
            <input type="text" placeholder='Email' onChange={changes} name='Email'/>
            <br />
            <br />
            <input type="password" placeholder='Password' onChange={changes} name='Password'/>
            <br />
            <br />
            </form>
          <button onClick={handleSignup}>Submit</button>
          <br /><br />

          <Link to="/login">Login Page </Link>
        </div>
    )
}
export default SignUp