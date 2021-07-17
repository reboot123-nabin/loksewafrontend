import React from 'react'
import { useState } from 'react';
import AdminNavbar from '../AdminNavbar'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
export const AddQuestion = () => {
    const history = useHistory();
    const [question, setQuestion] = useState({
        label: "", category: "", difficulty: ""
    });
    const [option1, setOption1] = useState({
        value: '', is_correct: 0
    });
    const [option2, setOption2] = useState({
        value: '', is_correct: 0
    });
    const [option3, setOption3] = useState({
        value: '', is_correct: 0
    });
    const [option4, setOption4] = useState({
        value: '', is_correct: 0
    });


    const handleInputs = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        })
    }

    const addquestion = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/v1/question", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,

                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...question,
                options: [option1, option2, option3, option4]
            })
        });

        const data = await res.json();



        if (res.status === 422 || !data) {
            toast.error("Invalid credentials!");
        }
        // else if (res.status === 422 && !data.options.is_correct) {
        //     toast.error("please check the box")
        // }
        else {
            toast.success("You have successfully added question!");
            setTimeout(() => {
                history.push('/');
            }, 1500)
        }
    }
    return (
        <>
            <AdminNavbar />
            <div className="question_area">
                <ToastContainer />

                <h3>Add your question here</h3>

                <form className="addquiz">

                    <div className="container">
                        <div className="row">
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Title</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" name="label" aria-describedby="emailHelp" placeholder="Enter title" value={question.label} onChange={handleInputs} required="true" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Category</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" name="category" aria-describedby="emailHelp" placeholder="Enter title" value={question.category} onChange={handleInputs} required="true" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Difficulty</label>
                               

                                <select class="form-control" name="difficulty" defaultValue="Easy"   value={question.difficulty} onChange={handleInputs}>
      <option value  ="Easy" selected>Easy</option>
            <option value="Medium">Medium</option>
          
            <option value="Hard">Hard</option>
      </select>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="exampleInputPassword1">answer1</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" name="option1" placeholder="Enter title"
                                                value={option1.value} onChange={e => setOption1({ ...option1, value: e.target.value })} required="true" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckChecked"
                                                            onChange={e => setOption1({ ...option1, is_correct: e.target.checked })} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <label for="exampleInputPassword1">answer2</label>

                                        <div className="input-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" name="option2" placeholder="Enter title"
                                                value={option2.value} onChange={e => setOption2({ ...option2, value: e.target.value })} required="true" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="1" id="flexCheckChecked2"
                                                            onChange={e => setOption2({ ...option2, is_correct: e.target.checked })} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">

                                        <label for="exampleInputPassword1">answer3</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                name="option3" placeholder="Enter title" value={option3.value}
                                                onChange={e => setOption3({ ...option3, value: e.target.value })} required="true" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3"
                                                            onChange={e => setOption3({ ...option3, is_correct: e.target.checked })} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <label for="exampleInputPassword1">answer4</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                                name="option4" placeholder="Enter title" value={option4.value}
                                                onChange={e => setOption4({ ...option4, value: e.target.value })} required="true" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4"
                                                            onChange={e => setOption4({ ...option4, is_correct: e.target.checked })} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className=" mt-3 btn btn-success btn_quiz" onClick={addquestion} >Add Question</button>


                </form>



            </div>
        </>
    )
}

export default AddQuestion;