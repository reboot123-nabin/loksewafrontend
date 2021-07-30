
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../AdminNavbar';
export const TableQuiz = () => {

    // const[items,setItems]=useState({items:"",difficulty:"",category:"",count:""});
    const[title,setTitle]=useState([]);
    const[id,setId]=useState("");
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
           console.log(data._id);
            setTitle(data);
           setId(data._id);
        

 
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

    const deletequiz = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/v1/quiz/"+id, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
           
        });
        const data=res.json();
        setId(data);
        
        if (res.status) {
            toast.error("You have successfully deleted question!");
        }
        else {
            toast.success("delete failed");
            //   setTimeout(() => {
            //       // history.push('/l');
            //   }, 1500)
        }
    }
    return (
        <>
            <AdminNavbar />
         
                          <div className="table-quiz">       
                  <table class="table">
                   
    <thead class="thead-dark">
      <tr>
        <th className="preview2">Quiz Title</th>
        <th className="preview">ViewQuestion</th>
        <th>Delete</th>
        <th>Update</th>
    
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
                  
                    <td className="preview"> <NavLink class="btn btn-primary " to={'/single-question/'+_id}>Preview</NavLink></td>
                   
                    <td className="preview"> <button  onClick={deletequiz.bind(_id)}>Delete</button></td>
                    <td className="preview"> <NavLink class="btn btn-primary " to={'/update-quiz/'+_id}>Update</NavLink></td>
           
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

export default TableQuiz
