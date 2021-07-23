
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";
import { useParams } from "react-router-dom";
import AdminNavbar from '../AdminNavbar';

export const SingleQuestion = () => {
    // const[title,setTitle]=useState('');
    // const[difficulty,setDifficulty]=useState('');
    // const[category,setCategory]=useState('');
    // const[count,setCount]=useState('');
   const[singlequiz,setsinglequiz]=useState([]);
 

const { id } = useParams();

    const setSingleQuestion=async()=>{
        try{
            const res=await fetch('/api/v1/quiz/'+id,{
                method:"GET",
                headers:{
                   //Accept:"application/json",
                    "Content-Type":"application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
             
            });
            const data=await res.json();
            setsinglequiz(data.questions);
            // setTitle(data.questions);
            // setDifficulty(data.difficulty);
            // setCategory(data.category);
            // setCount(data.count);

            
      
           
           if(!res.status===200){
               const error=new Error(res.error);
               throw error;
           }

        }catch(err){
            console.log(err);
            //history.push('/login');

        }
    }



    useEffect(()=>{
      setSingleQuestion();


       
    },[]);
    return (
        <>
            <AdminNavbar />

            <div className="single-quiz">
       
    </div>

<div class="table-box">
        <div class="table-row table-head">
            <div class="table-cell first-cell">
                <p>Quiz Title</p>
            </div>
            <div class="table-cell">
                <p>Options</p>
            </div>
            <div class="table-cell last-cell">
                <p>Correct Answer</p>
            </div> 
        </div>


       

        {
        singlequiz.map((curElem)=>{
            const {label,options}=curElem;
            return(
                
                <>
                 <div class="table-row">

                 <div class="table-cell first-cell hover">
                <p>{label} </p>
            </div>
            <div class="table-cell second-cell hover">
                {options.map((opElem)=>{
                        const{value,is_correct}=opElem;
                        return(
                            <>
                                 
                        
        
                <p>{value}</p>
         
            
            
                           
                            </>
                        )
                    })} 
                       </div>
                       <div class="table-cell last-cell hover">
                       {options.filter(x=>x.is_correct).map((opElem)=>{
                        const{value,is_correct}=opElem;
                        return(
                            <>
                                 
                        
        
                <p>{value}</p>
         
            
            
                           
                            </>
                        )
                    })} 
            </div>  
      
  

          
            </div>
                </>


            )
        })
    }
       
 
</div>   






        </>
    )
}

export default SingleQuestion
