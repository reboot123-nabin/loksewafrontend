import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import AdminNavbar from '../AdminNavbar';
const ViewQuestion = () => {
    const history = useHistory();

    const [items, setItems] = useState([]);
    const setViewPage = async () => {
        try {
            const res = await fetch('/api/v1/questions', {
                method: "GET",
                headers: {
                    
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
               
            });
            const data = await res.json();
            console.log(data);
            setItems(data.data);
          

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');

        }
    }
    useEffect(() => {
        setViewPage();



    });



    return (
        <>

            <AdminNavbar />
            <div className="container questionoutside">
                <h1 class="titlequ">All Questions With Answers</h1>
                <div className="row">
                    <table class="table">

                        <thead class="thead-dark">
                            <tr>
                                <th>Question</th>
                                <th>Category</th>
                                <th>Answer(Options)</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        {
                            items.map((curElem) => {
                                const { _id,options, label, category } = curElem;
                                return (
                                    <>


                                        <tbody>
                                            <tr>
                                                <td>  {label}</td>
                                                <td> {category}</td>
                                                <td>  {

                                                    options.map((opElem) => {
                                                        const { value, is_correct } = opElem;
                                                        return (
                                                            <>
                                                                {value},
                                                                {is_correct}
                                                            </>
                                                        )
                                                    })}</td>

                                                           
                    <td className="preview"> <NavLink class="btn btn-primary " to={'/update-question/'+_id}>Preview</NavLink></td>
                                            </tr>

                                        </tbody>



                                    </>


                                )
                            })
                        }
                    </table>

                </div>


            </div>
        </>
    )
}


export default ViewQuestion