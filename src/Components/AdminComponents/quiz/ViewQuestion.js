import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";


const ViewQuestion=()=>{
    const[items,setItems]=useState([]);
    // const [label, setlabel] = useState('');
    // const [category, setcategory] = useState('');
    // const [options,setoption]=useState('');
    // const show=false;
    const setViewPage=async()=>{
        try{
            const res=await fetch('/api/v1/questions',{
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
            setItems(data.data);
        // setlabel(data.data.label);
           
        //    setcategory(data.data.category);
        // setoption(data.data.options);
           
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
      setViewPage();


       
    },[]);


 
return(
    <>


    {
        items.map((curElem)=>{
            const {options,label,question}=curElem;
            return(
                <>
              
                {options.map((opElem)=>{
                    const{value,is_correct}=opElem;
                    return(
                        <>
                        {value},
                        {is_correct}
                        </>
                    )
                })}
                {label}
                {question}
              
                </>
            )
        })
    }
    </>
)
}


export default ViewQuestion