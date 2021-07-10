import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {NavLink, useHistory} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';



const Login = ()=>  {
    const history=useHistory();

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const submitLogin= async(e)=>{
        e.preventDefault();
        const res= await fetch('/api/v1/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

                
            },
            body:JSON.stringify({
                email,
                password
            })
        });
  
        const data= await res.json();
  
        if(res.status===422 || !data){
            toast.error("Invalid credentials!");
        }
        else{
            
            toast.success("You have successfully login!");
            localStorage.setItem('token',data.token)
            console.log(data,data.token)
            setTimeout(()=>{
            history.push('/profile');
          }, 1500)
        }
    }

    return (
        
        <section>
             <ToastContainer/>
        <div className="imgBx">
        <img src="./images/mylogin.jpg" alt= "hamrologin"/>
       </div>
       <div className="contentBx">
        <div className="formBx">
            <h2>Login</h2>
            <form>
                <div className="inputBx">
                    <span>Email/Number</span>
                    <input type="text" name="email" placeholder="Enter your email/Phonenumber" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} />
                    
                </div>
                <div className="inputBx">
                    <span>Password</span>
                    <input type="password" name="password" placeholder="Enter your password" defaultvalue={password}onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="remember">
                <a href="">Forget password?</a>
                </div>
                <div className="inputBx">
                    <input type="submit" value="Sign in" onClick={submitLogin}/>
                </div>
                <div className="inputBx">
                    <p>Don't have an account? <a href="registration">Sign Up</a></p>
                </div>
            </form>
            <h3>Login with Socil media</h3>
            <ul className="sci">
            
             <li><SocialIcon url="https://google.com/jaketrent" /></li>
             <li><SocialIcon url="https://facebook.com/jaketrent" /></li>
            <li><SocialIcon url="https://twitter.com/jaketrent" /></li>
                      
            </ul>

         </div>
        
       </div>
       </section>
    )
}

export default Login
