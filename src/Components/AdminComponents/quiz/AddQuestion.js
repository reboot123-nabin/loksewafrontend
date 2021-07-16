import React from 'react'
import { useState } from 'react';
import AdminNavbar from '../AdminNavbar'
import { ToastContainer, toast } from 'react-toastify';

export const AddQuestion = () => {
    const [admin, setAdmin] = useState({
        label: "", category: ""
    });
    const [options, setOption] = useState({
        option1: "", option2: "", option3: "", option4: ""
    })
    const [checked, setChecked] = useState(false);


    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAdmin({ ...admin, [name]: value });
        setOption({ ...options, [name]: value });
        setChecked(true);
    }

    const addquestion = async (e) => {
        e.preventDefault();
        const { label, category, options } = admin;
        const res = await fetch("/api/v1/question", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,

                'Accept': 'application/json'
            },
            body: JSON.stringify({
                label, category, options
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
            <div className="question_area">

                <h3>Add your question here</h3>

                <form className="addquiz">

                    <div className="container">
                        <div className="row">
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Label</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" name="label" aria-describedby="emailHelp" placeholder="Enter title" value={admin.label} onChange={handleInputs} required="true" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Category</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" name="category" aria-describedby="emailHelp" placeholder="Enter title" value={admin.category} onChange={handleInputs} required="true" />
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="exampleInputPassword1">Option1</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="option1" placeholder="Enter title" value={options.option1} onChange={handleInputs} required="true" />
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" onChange={handleInputs} for="flexCheckChecked" value={checked}>
                                                Checked checkbox
                                            </label>
                                        </div>
                                        <label for="exampleInputPassword1">Option2</label>

                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="option2" placeholder="Enter title" value={options.option2} onChange={handleInputs} required="true" />
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value={checked} id="flexCheckChecked2" />
                                            <label class="form-check-label" onChange={handleInputs} for="flexCheckChecked2">
                                                Checked checkbox
                                            </label>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <label for="exampleInputPassword1">Option3</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="option3" placeholder="Enter title" value={options.option3} onChange={handleInputs} required="true" />
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                            <label class="form-check-label" onChange={handleInputs} value={checked} for="flexCheckChecked3" value={checked}>
                                                Checked checkbox
                                            </label>
                                        </div>

                                        <label for="exampleInputPassword1">Option4</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="option4" placeholder="Enter title" value={options.option4} onChange={handleInputs} required="true" />
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                                            <label class="form-check-label" onChange={handleInputs} value={checked} for="flexCheckChecked4">
                                                Checked checkbox
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <button type="submit" className=" mt-3 btn btn-success btn_quiz" onClick={addquestion} >Create Quiz</button>


                </form>



            </div>
        </>
    )
}

export default AddQuestion;