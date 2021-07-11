import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {NavLink, useHistory} from 'react-router-dom';


const Registration=()=>{
  const history=useHistory();

  const [user,setUser]=useState({
      first_name:"",last_name:"",email:"",phone:"", gender:"",password:""
  });

  let name, value;
  const handleInputs=(e)=>{

      console.log(e);

      name=e.target.name;

      value=e.target.value;

      setUser({...user,[name]:value});
  }
  


  const PostData=async(e)=>{
      e.preventDefault();
      const {first_name,last_name,email,phone,gender,password}=user;
      const res=await fetch("/api/v1/register",{
          method:"POST",
          headers:{
              "Content-Type":'application/json',
              'Accept': 'application/json'
          },
          body:JSON.stringify({
              first_name,last_name,email,phone,gender,password
          })


      });
      const data=await res.json();

      if(res.status === 422 || !data){
        toast.error("Invalid credentials!");
      }
      else{
          console.log(data);
        toast.success("You have successfully registered!");
        setTimeout(()=>{
        history.push('/login');
      }, 1500)
      }
  }
    return( 
      <>
     <div className="myregistrationbody">
  <ToastContainer/>
      <div className="Mycontainer">
      <div className="title">Registration</div>
      <p>It's Quick And Easy.</p><hr/>
      <form method ="POST" action="">
          <div className="user-details">
              <div className="input-box">
                  <span className="details">First Name</span>
                  <input type="text" placeholder="enter your firstname" 
                  name="first_name" id="first_name" autoComplete="off"
                  value={user.first_name} onChange={handleInputs} required/>
            </div>
          
              <div className="input-box">
                  <span className="details">Last Name</span>
                  <input type="text" placeholder="enter your lastname" 
                  name="last_name" id="last_name" autoComplete="off"
                 value={user.last_name} onChange={handleInputs} required/>
              </div>

              <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" placeholder="enter your email"
                   name="email"  id="username" autoComplete="off"
                  value={user.email} onChange={handleInputs} required />
              </div>

              <div className="input-box">
                  <span className="details">Phone</span>
                  <input type="text" placeholder="enter your phone number"
                    name="phone"  id="phone" autoComplete="off"
                    value={user.phone} onChange={handleInputs} required />
              </div>

              <div className="input-box">
                  <span className="details">Password</span>
                  <input type="password" placeholder="enter your password" 
                   name="password" id="password" autoComplete="off"
                  value={user.password} onChange={handleInputs}  />
              </div>

              <div className="input-box">
                  <span className="details">confirmpassword</span>
                  <input type="password" placeholder="enter your confirm password" 
                   />
              </div>

              <div className="input-box">
                  <span className="details">Gender</span>
                  <input type="text" placeholder="Select your gender.."  name="gender" id="gender" autoComplete="off"
                  value={user.gender} onChange={handleInputs}
                   />
              </div>
          </div>
        
         
              {/* <span className="gender-title">Gender</span>
              <div className="category">
                  <label for="dot-1">
                      <span className="dot one"></span>
                      <span className="gender">Male</span>
                  </label>
                  <label for="dot-2">
                      <span className="dot two"></span>
                      <span className="gender">Female</span>
                  </label>
                  <label for="dot-3">
                      <span className="dot three"></span>
                      <span className="gender">Others</span>
                  </label>
              </div> */}
        
          {/* <div className="ProfileImage">
              <h3 className="profilename">Choose your avatar</h3><br/>
              <input type="file" className="" name=""/>
          </div> */}
          <div className="Registerbutton">
              <input type="submit" value="Create New Account" onClick={PostData}/>
              <p>Already have an account? <a href="login">Sign In</a></p>
          </div>
            
           
      </form>
  </div>
  </div>
  </>
        
    )
}

export default Registration