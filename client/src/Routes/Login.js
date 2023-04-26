import React from "react";

import './SignUp.css';
import loginP from '../assets/loginP.png'
import signUpAvatar from '../assets/signUpAvatar.png'
import wave from '../assets/wave.jpg'




const Login=()=>{
//    const [initial, setInitital] = useState({
//     Username:'',
//     Password:''
//    });
// const changeHandler=e=>{
//     setInitital({...initial,[e.target.name]:e.target.value})
//     console.log(initial)
// }
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


    return(
        // <div classNameName="text-center my-5">
        //     <h2 className="my-5">Login</h2>
        //     <br />
        //     <form action="">
        //     <input type="text" placeholder="Username" onChange={changeHandler} name='Username'/>
        //     <br /><br />
        //     <input type="password" placeholder="Password" onChange={changeHandler} name='Password'/>
        //     <br /><br />
        //     </form>
        //     <button>Login</button>
        //     <br /><br />
        //     <Link to="/signup">Sign Up Page </Link>
        // </div>
       <div>
        <img className="wave" src={wave} alt="img"/>
       
        <div className="containerkavya">
		
		<div className="login-content">
			<form action="index.html" className="formm">
				<img src={signUpAvatar} alt="img"/>
				<h3 className="title">Welcome</h3>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		{/* <h5>Username</h5> */}
           		   		<input type="text" className="input" placeholder="Username"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	{/* <h5>Password</h5> */}
           		    	<input type="password" className="input" placeholder="Password"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btnSign" value="Login"/>
            </form>
        </div>
        
        <div className="img">
        
			<img src={loginP} alt="img"/>
     
		</div>
   
    </div>

    </div>
    )
}
export default Login