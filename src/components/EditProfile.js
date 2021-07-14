import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const EditProfile = ()=> {

    // const [email,setEmail]=useState('');
    const [first_name,setFirst_name]=useState('');
    const [last_name,setLast_name]= useState('');
    // const[phone,setPhone]=useState('');
    const[gender,setGender]=useState('');
    
    const history = useHistory();
    const ComponentDidMount=async()=>{
        try{
            const res=await fetch('api/v1/user/profile',{
                method:"GET",
                headers:{
                   //Accept:"application/json",
                    "Content-Type":"application/json",
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                },
                //credentials:"include"
            });
            const data=await res.json();
           console.log(data);
        //    console.log(data.email);
        //    setEmail(data.email);
          
           setFirst_name(data.first_name);
           setLast_name(data.last_name);
        //    setPhone(data.phone);
           setGender(data.gender);
           


           
           if(!res.status===200){

               const error=new Error(res.error);
               throw error;
           }

        }catch(err){
            console.log(err);
            // history.push('/login');

        }
    }
    useEffect(()=>{
        ComponentDidMount();

    },[]);



   
    const EditFunction=async(e)=>{
    e.preventDefault();
   
    const res=await fetch('api/v1/user/profile/update',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'Authorization':`Bearer ${localStorage.getItem('token')}`
           

        },
        body:JSON.stringify({
            first_name,last_name,gender
        })
    });

    const data=await res.json();
    if(!data){
        toast.error("Something went wrong!");
    }
    else{
        toast.success('Your profile has been edited!')
        setTimeout(()=>{
            history.push('/profile');
          }, 1500)
     
    }
}

    return (
         <>
        <div class="outline">
     <ToastContainer/>
        <div class="box">
        <div class="arrange">

        <div class="file22">

        <input type="file" id="file" name="image"/>
        <img type="file" src ="pic22.jpg" width="100%" height="100%"/>
        <label className="labelprofile" style={{width:"45px",height:"30px"}}  for="file">edit</label>
        </div>

        <div class="below">
        <div className="input-wrap">
                   <label className="detailsone">First_Name </label>
        
        <input type="text" placeholder="first_name" name="" value={first_name} onChange={(e)=>setFirst_name(e.target.value)} />
              </div>
      
        <label className="details">Last_Name</label>
        <input type="text" placeholder="last_name" name="" value={last_name} onChange={(e)=>setLast_name(e.target.value)}/>
        {/* <input type="email" placeholder="email" name="" value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
        {/* <input type="text" placeholder="Phone" name="" value={phone} onChange={(e)=>setPhone(e.target.value)}/> */}
        <label className="details">Gender</label>
        <input type="text" name="gender" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
        <label className="details">UserType</label>
        <input type="text" placeholder="usertype" name=""/>
        </div>



<button
name="done" onClick={EditFunction} id="done" >EDIT PROFILE</button>

</div>
</div>
</div>

        </>
    )
}

export default EditProfile
