
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
export const Quizes = () => {

    const[title,setTitle]=useState([]);


    const setViewQuiz=async()=>{
        try{
            const res=await fetch('/api/v1/quizzes',{
                method:"GET",
                headers:{
                  
                    "Content-Type":"application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                
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
            

        }
    }


  


    useEffect(()=>{
      setViewQuiz();


       
    },[]);
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
            const {_id,title}=curElem;
            return(
                <>
                
    
          
    
        
      <tr>
     
    
                    <td className="preview2">  <div className="card cardt">{title}</div>  </td>
                  
                    <td className="preview"> <NavLink class="btn btn-primary " to={'/question-session/'+_id}>Preview</NavLink></td>
        
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

export default Quizes
