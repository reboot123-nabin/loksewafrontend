
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";
import { useParams } from "react-router-dom";


export const CategorySingle = () => {
    const history = useHistory();
    // const[title,setTitle]=useState('');
    // const[difficulty,setDifficulty]=useState('');
    // const[category,setCategory]=useState('');
    // const[count,setCount]=useState('');
   const[singlequiz,setsinglequiz]=useState([]);
 

const { id } = useParams();

    const setSingleCategory=async()=>{
        
        try{
            const res=await fetch('/api/v1/category/'+id,{
                method:"GET",
                headers:{
                   //Accept:"application/json",
                    "Content-Type":"application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
             
            });
            const data=await res.json();
            setsinglequiz(data.questions);
          
            
      
           
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
      setSingleCategory();


       
    });
    return (
        <>
          

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
                        const{value}=opElem;
                        return(
                            <>
                                 
                        
        
                <p>{value}</p>
         
            
            
                           
                            </>
                        )
                    })} 
                       </div>
                       {/* <div class="table-cell last-cell hover">
                       {options.filter(x=>x.is_correct).map((opElem)=>{
                        const{value,is_correct}=opElem;
                        return(
                            <>
                                 
                        
        
                <p>{value}</p>
         
            
            
                           
                            </>
                        )
                    })} 
            </div>   */}
      
  

          
            </div>
                </>


            )
        })
    }
       
 
</div>   






        </>
    )
}

export default CategorySingle
