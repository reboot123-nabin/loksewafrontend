
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
export const TableQuiz = () => {

    // const[items,setItems]=useState({items:"",difficulty:"",category:"",count:""});
    const[title,setTitle]=useState([]);
    // const [difficulty, setdifficulty] = useState('');
    // const [category, setcategory] = useState('');
const [count,setcount]=useState('');
    // const show=false;
    const setViewQuiz=async()=>{
        try{
            const res=await fetch('/api/v1/quizzes',{
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
            //history.push('/login');

        }
    }


  


    useEffect(()=>{
      setViewQuiz();


       
    },[]);
    return (
        <>
            <AdminNavbar />
         
                          <div className="table-quiz">       
                  <table class="table">
                   
    <thead class="thead-dark">
      <tr>
        <th>Question</th>
        <th>Category</th>
      
      </tr>
    </thead>
    {
        title.map((curElem)=>{
            const {_id,title}=curElem;
            return(
                <>
                
    
          
    <tbody>
      <tr>
    
    
                    <td>  {title} </td>
                   
                    <td> <NavLink class="btn btn-primary" to={'/single-question/'+_id}>Cart</NavLink></td>
      </tr>
      
    </tbody>

          
            
                </>


            )
        })
    }
      </table>
             
      </div>     


        </>
    )
}

export default TableQuiz
