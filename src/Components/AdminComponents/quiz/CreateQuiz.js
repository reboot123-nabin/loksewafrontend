import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';

export const CreateQuiz = () => {
   const history = useHistory();

   const [quiz, setQuiz] = useState({
       title: "", difficulty: "", count:"", category: ""
   });


   let name, value;
   const handleInputs = (e) => {
       name = e.target.name;
       value = e.target.value;
       setQuiz({ ...quiz, [name]: value });
   }

   const addquiz = async (e) => {
       e.preventDefault();
       const res = await fetch("/api/v1/quiz", {
           method: "POST",
           headers: {
               "Content-Type": 'application/json',
               'Accept': 'application/json'
           },
           body: JSON.stringify({
            ...quiz
           })
       });

       const data = await res.json();

       if (res.status === 422 || !data) {
           toast.error("Invalid credentials!");
       }
       else {
           toast.success("You have successfully added question!");
         //   setTimeout(() => {
         //       // history.push('/l');
         //   }, 1500)
       }
   }

   return (
      <>
         <AdminNavbar />
         <div className="addquizbox">
            <form className="Createformquiz">
               <h3 className="d-flex justify-content-center createheadline">Create Quiz from here</h3>
               <hr className="w-50 mx-auto "/>
               <div className="row">
                  
                     <div className="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" name="title"
                         id="exampleInputEmail1" value={quiz.title} onChange={handleInputs} 
                         aria-describedby="emailHelp" placeholder="Enter title" required="true"/>

                     </div>
                     <div className="form-group">
                        <label for="exampleInputPassword1">Difficulty</label>
                        <select class="form-select" name="difficulty" value={quiz.difficulty} 
                        onChange={handleInputs} required="true" >
                           <option value="">Choose</option>
                           <option value="Easy">Easy</option>
                           <option value="Medium">Medium</option>
                           <option value="Hard">Hard</option>
                        </select>
                     </div>

                     <div className="form-group">
                        <label for="exampleInputPassword1">Count</label>
                        <input type="text" className="form-control" name="count"
                         id="exampleInputPassword1" value={quiz.count} 
                         onChange={handleInputs} placeholder="enter start" required="true" />
                     </div>

               

                     <div className="form-group">
                        <label for="exampleInputPassword1">Category </label>
                        {/* <select class="form-select" 
                        aria-label="Disabled select example" name="category" value={quiz.category}
                         onChange={handleInputs} required="true" >
                   
                        </select> */}
                        <input type="text" className="form-control" name="category" 
                        id="exampleInputPassword1" value={quiz.category}
                         onChange={handleInputs} placeholder="enter start" required="true" />
                     </div>
                    
               

               </div>
               <button type="submit" className=" mt-3 btn btn-success btn_quiz"
                onClick={addquiz} >Create Quiz</button>


            </form>

         </div>


      </>
   )
}

export default CreateQuiz
