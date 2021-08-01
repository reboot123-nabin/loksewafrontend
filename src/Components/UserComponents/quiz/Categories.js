
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";
import { NavLink } from 'react-router-dom';

export const Categories = () => {
    const history = useHistory();
    // const[items,setItems]=useState({items:"",difficulty:"",category:"",count:""});
    const[title,setTitle]=useState([]);

    const setViewCategory=async()=>{
       
        try{
            const res=await fetch('/api/v1/categories',{
                method:"GET",
                headers:{
                   //Accept:"application/json",
                    "Content-Type":"application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                //credentials:"include"
            });
            const data=await res.json();
           console.log(data);
            setTitle(data);
           

 
           if(!res.status===200){
               const error=new Error(res.error);
               throw error;
           }

        }catch(err){
            console.log(err);
            history.push('/login');

        }
    }


  


    useEffect(()=>{
        setViewCategory();

       
    });
    return (
        <>

         
                          <div className="table-quiz">       
                  <table class="table">
                   
    <thead class="thead-dark">
      <tr>
        <th className="preview2">Quiz Title</th>
        <th className="preview">ViewQuestion</th>
    
      </tr>
    </thead>
    <tbody>
 
    {
        title.map((curElem)=>{
            const {_id,name}=curElem;
            return(
                <>
                
    
          
    
        
      <tr>
    
                    <td className="preview2">  <div className="card cardt">{name}</div>  </td>
                  
                    <td className="preview"> <NavLink class="btn btn-primary " to={'/category-single/'+_id}>Preview</NavLink></td>
        
      </tr>
      


          
            
                </>


            )
        })
    }
    
    
    </tbody>
      </table>
             
      </div>     
        
        </>
    )
}

export default Categories