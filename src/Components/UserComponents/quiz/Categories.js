
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Header from '../../CommonComponents/Header'

export const Categories = () => {
    const history = useHistory();
    // const[items,setItems]=useState({items:"",difficulty:"",category:"",count:""});
    const [title, setTitle] = useState([]);


    useEffect(() => {
        const setViewCategory = async () => {
            try {
                const res = await fetch('/api/v1/categories', {
                    method: "GET",
                    headers: {
                        //Accept:"application/json",
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    //credentials:"include"
                });
                const data = await res.json();

                setTitle(data);
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            } catch (err) {
                console.log(err);
                history.push('/login');
            }
        }
        setViewCategory();
    }, [history]);


    return (
        <>
            <Header />
            <div className="table-quiz">
                <div className="jumbotron">Choose a category to play quiz</div>
                <div className="d-flex">

                    {
                        title.map((curElem) => {
                            const { _id, name } = curElem;
                            return (
                                <>
                                    <button className="btn btn-large btn-success m-auto mb-5">{name}</button>
                                    {/* <td className="preview"> <NavLink className="btn btn-primary " to={'/category-single/' + _id}>Preview</NavLink></td> */}
                                </>
                            )
                        })
                    }

                </div>



            </div>

        </>
    )
}

export default Categories