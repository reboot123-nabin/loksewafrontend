

import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { useHistory, useParams } from "react-router-dom";

export const QuestionSession = () => {
    const [item, setItems] = useState([]);
    const [index, setIndex] = useState(0);
    const [quiz, setQuiz] = useState({});
    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(0)
    const { id } = useParams();
    const setViewQuestion = async () => {
        try {
            const res = await fetch('/api/v1/quiz/' + id, {
                method: "GET",
                headers: {
                    //Accept:"application/json",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                //credentials:"include"
            });
            const data = await res.json();
            console.log("String", data);
            setQuiz(data);
            setItems(data.questions);

            // setlabel(data.data.label);

            //    setcategory(data.data.category);
            // setoption(data.data.options);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            //history.push('/login');

        }
    }
    const setViewPage = async () => {
        try {
            const res = await fetch('/api/v1/questions', {
                method: "GET",
                headers: {
                    //Accept:"application/json",
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                //credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setItems(data.data);
            // setlabel(data.data.label);

            //    setcategory(data.data.category);
            // setoption(data.data.options);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            //history.push('/login');

        }
    }
    useEffect(() => {
        setViewPage();
        setViewQuestion();


    }, []);


    const HandleNextQuestion = () => {
        const nextindex = index + 1;
        if (quiz.questions && nextindex in quiz.questions)
            setIndex(nextindex)

        console.log(nextindex, "nextindex")
        setCorrect(0)
        setAnswer("")
    }

    const submitAnswer = async(a) => {
        // check for the answer
        let response = await fetch(`/api/v1/quiz/${id}/question/${quiz.questions[index]._id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answer : a
            })
        });
        let data = await response.json();
        if(response.status == 201) {
            setCorrect(data.correct ? 1 : -1);
        }

        setTimeout(() => {
            HandleNextQuestion()
        }, 3e3)
    }

    const handleClickAnswer = a => {
        setAnswer(a)
        
        confirmAlert({
            title: 'LOck kiya jaye?',
            message: 'Are you sure mahodaya?' + answer,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => submitAnswer(a)
                }, {
                    label: 'No',
                    onClick: () => console.log('not no')
                }
            ]
        })
    }

    return (
        <div className="decorationquiz">
            <div className="container ">
                    <div class="que_text mt-5">
                        {
                            quiz.questions && quiz.questions[index].label
                        }

                        <div class="timer">
                            <div class="time_left_txt">Time Left</div>
                            <div class="timer_sec">15</div>
                        </div>
                        <div class="time_line"></div>
                    </div>

                    <hr className="w-100 mx-auto " />
                    <div className="row mt-5 answerway">
                        {
                            quiz.questions && quiz.questions[index].options.map((curElem, index) => {
                                const { value, _id } = curElem;
                                return (
                                    <div key={index} className="col-md-6 " >
                                        <button className={`buttonnew ${_id === answer ? (correct === 1 ? 'btn-success' : (correct === -1 ? 'btn-danger' : '')) : ''}`} onClick={e => handleClickAnswer(_id)}>{value}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
       
    )
}

export default QuestionSession
