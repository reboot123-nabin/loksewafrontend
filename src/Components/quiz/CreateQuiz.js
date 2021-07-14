import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Countries } from '../Utils/country-code';
import { NavLink } from 'react-router-dom';
import QuizQuestion from '../CommonComponents/QuizQuestion';

export const CreateQuiz = () => {
   const history = useHistory();

   // const [user, setUser] = useState({
   //     label: "", category: "", option: ""
   // });


   // let name, value;
   // const handleInputs = (e) => {
   //     name = e.target.name;
   //     value = e.target.value;
   //     setUser({ ...user, [name]: value });
   // }

   // const addquestion = async (e) => {
   //     e.preventDefault();
   //     const res = await fetch("api/v1/question", {
   //         method: "POST",
   //         headers: {
   //             "Content-Type": 'application/json',
   //             'Accept': 'application/json'
   //         },
   //         body: JSON.stringify({
   //          label,category,option
   //         })
   //     });

   //     const data = await res.json();

   //     if (res.status === 422 || !data) {
   //         toast.error("Invalid credentials!");
   //     }
   //     else {
   //         toast.success("You have successfully added question!");
   //       //   setTimeout(() => {
   //       //       // history.push('/l');
   //       //   }, 1500)
   //     }
   // }

    return (
        <>
        <QuizQuestion></QuizQuestion>
        <div className="addquizbox">
         <form>
         <div className="form-group">
            <label for="exampleInputEmail1">Label</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" required="true"/>
         </div><br/>
         <div className="form-group">
            <label for="exampleInputPassword1">Difficulty</label>
            <select class="form-select" aria-label="Disabled select example" required="true" >
            <option selected>choose</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
         </div><br/>
  
         
         <div className="form-group">
            <label for="exampleInputPassword1">Category</label>
            <select class="form-select" aria-label="Disabled select example" required="true" >
            <option selected>choose</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
         </div><br/>
         <div className="form-group">
            <label for="exampleInputPassword1">start</label>
            <input type="datetime-local" className="form-control" id="exampleInputPassword1" placeholder="enter start" required="true"/>
         </div><br/>
         <div className="form-group">
            <label for="exampleInputPassword1">End</label>
            <input type="datetime-local" className="form-control" id="exampleInputPassword1" placeholder="" required="true"/>
         </div><br/>
         <div className="form-group">
            <label for="exampleInputPassword1">Hosted?</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required="true"/>
         </div><br/>
         <button type="submit" className="btn btn-success" >save</button>
      
         </form>

         </div>
	
                        
        </>
    )
}

export default CreateQuiz
