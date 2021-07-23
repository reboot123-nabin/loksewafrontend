
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
            {
        singlequiz.map((curElem)=>{
            const {label,options}=curElem;
            return(
                <>
                
    
          
    <tbody>
      <tr>
    
    
                    <td> <h1> {label}</h1> </td>
                   
                    <td>{options.map((opElem)=>{
                        const{value,is_correct}=opElem;
                        return(
                            <>
                           <h2>{value}</h2> 
                            
                            <h2>{is_correct}</h2>
                            </>
                        )
                    })} </td>
      </tr>
      
    </tbody>

          
            
                </>


            )
        })
    }
    </div>
        </>
    )
}

export default SingleQuestion
