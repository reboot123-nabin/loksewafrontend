import React, { useState } from 'react';
import {NavLink, useHistory} from 'react-router-dom';


const Registration=()=>{
    const history=useHistory();

    const [user,setUser]=useState({
        first_name:"",last_name:"",password:"",date:"",profileImage:"",bio:""
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
        const {first_name,last_name,email,userType,password,date,profileImage,bio}=user;
        const res=await fetch("api/v1/user/register",{
            method:"POST",
            headers:{
                "Content-Type":'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                first_name,last_name,email,userType,password,date,profileImage,bio
            })


        });
        const data=await res.json();

        if(res.status === 422 || !data){
            window.alert("invalid registration");
            console.log("invalid registration");
        }
        else{
            window.alert("registration successful");
            console.log("successful registration");
            history.push("/");
        }
  }


    return( 
        <>
          <form method="POST" action="" className="register-form" id="register-form">
          <input type="text" name="first_name" id="first_name" autoComplete="off"
                            value={user.first_name} onChange={handleInputs}
                            placeholder="your name" />


                   <input type="text" name="last_name" id="last_name" autoComplete="off"
                            value={user.last_name} onChange={handleInputs}
                            placeholder="your name" /> 

<input type="text" name="email" id="email" autoComplete="off"
                            value={user.email} onChange={handleInputs}
                            placeholder="your name" /> 

<input type="text" name="userType" id="email" autoComplete="off"
                            value={user.userType} onChange={handleInputs}
                            placeholder="your name" /> 

<input type="password" name="password" id="password" autoComplete="off"
                            value={user.password} onChange={handleInputs}
                            placeholder="your name" />



                            <input type="text" name="date" id="date" autoComplete="off"
                            value={user.date} onChange={handleInputs}
                            placeholder="your name" /> 


                             <input type="text" name="profileImage" id="email" autoComplete="off"
                            value={user.profileImage} onChange={handleInputs}
                            placeholder="your name" />  


                                <input type="text" name="bio" id="bio" autoComplete="off"
                            value={user.bio} onChange={handleInputs}
                            placeholder="your name" /> 



<input type="submit" name="signup" id="signup" classsName="form-submit" autoComplete="off"
                            onClick={PostData} />
                            </form>



        </>
    )
}

export default Registration