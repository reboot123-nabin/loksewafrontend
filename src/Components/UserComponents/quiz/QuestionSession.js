
import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import { useHistory, useParams } from "react-router-dom";
import Header from '../../CommonComponents/Header'

export const QuestionSession = () => {

    const [step, setStep] = useState(1)
    const history = useHistory();

    const [isActive, setIsActive] = useState(true);
    const [counter, setCounter] = useState(15);
    // const [item, setItems] = useState([]);
    const [index, setIndex] = useState(0);
    const [quiz, setQuiz] = useState({});
    const [modal, setModal] = useState([]);
    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(0)
    const { id } = useParams();
    const [option, setOption] = useState([]);
    const [length, setLength] = useState([]);
    const [click,setClick]=useState([]);
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
        const setViewQuestion = async () => {
            try {
                const res = await fetch('/api/v1/quiz/' + id, {
                    method: "GET",
                    headers: {

                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await res.json();
                console.log("String", data);
                setQuiz(data);
                setLength(data.questions.length);
                console.log("length", length);
                setOption(randomizeoption(data.questions[0].options));

                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }

            } catch (err) {
                console.log(err);
                history.push('/login');

            }
        }
        const setViewModal = async () => {
            try {
                const res = await fetch('/api/v1/quiz/' + id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await res.json();
                console.log("String", data);
                setModal(data.questions);
                // setLength(data.data.length);
                // console.log("length",length);


                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }

            } catch (err) {
                console.log(err);
                history.push('/login');

            }
        }
        setViewQuestion();
        setViewModal();


    }, [history, id,length]);

    useEffect(() => {
        let intervalId;

        intervalId = setInterval(() => {
            setCounter(prevCounter => {
                if((prevCounter - 1) === 0) {
                    clearInterval(intervalId)

                    setTimeout(HandleNextQuestion, 1000);
                }
                return prevCounter - 1;
            });
            
        }, 1000)

        return () => clearInterval(intervalId);
    }, [isActive,length])

    const HandleNextQuestion = () => {

        const nextindex = index + 1;
        if (quiz.questions && nextindex in quiz.questions) {
            setIndex(nextindex);
            setOption(randomizeoption(quiz.questions[nextindex].options));
        }



        console.log(nextindex, "nextindex")

        setCorrect(0)
        setAnswer("")
        setCounter(15)
        setIsActive(isActive => !isActive)
    }

    const submitAnswer = async (a) => {
        // check for the answer
        let response = await fetch(`/api/v1/quiz/${id}/question/${quiz.questions[index]._id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answer: a
            })
        });
        let data = await response.json();
        if (response.status === 201) {
            setCorrect(data.correct ? 1 : -1);
            setClick(data)
            console.log(setCorrect)

        }
        if (length <= index + 1) {
            setStep(2)
        }
        
        
        setTimeout(() => {
            HandleNextQuestion()
        }, 3e3)
    }
    const randomizeoption = (array) => {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const handleClickAnswer = a => {
        setAnswer(a)
        // console.log(setAnswer(a))
        confirmAlert({
            title: 'LOck kiya jaye?',
            message: 'Are you sure mahodaya?',
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
        <>
            <Header />
            <div className="decorationquiz">
                <div className="container ">
                    {step === 1 && <>
                        <div class="que_text mt-5">

                            <h2 class="mt-2">{index + 1}:)</h2>
                            {
                                quiz.questions && quiz.questions[index].label
                            }

                            <div class="timer">
                                <div class="time_left_txt">Time Left</div>
                                <div class="timer_sec">{counter}</div>
                            </div>


                        </div>
                        <div class="time_line"></div>
                        {/* <hr className="w-80 mx-auto " /> */}
                        <div className="outeranswer">
                            <div className="answerway">
                                <div className="row mt-5 ">

                                    {
                                        quiz.questions && option.map((curElem, index) => {
                                            const { value, _id } = curElem;
                                            return (
                                                <div key={index} className="col-md-6 " >
                                                    <button className={`buttonnew ${_id === answer ? (correct === 1 ? 'btn-success' : (correct === -1 ? 'btn-danger' : '')) : ''}`} onClick={e => handleClickAnswer(_id)}>{value}</button>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className="half-circle">
                                    <h5>{index + 1} of {length}</h5>
                                </div>

                            </div>
                        </div>
                        {index + 1}
                    </>}
                    {step === 2 && <>
                        <div class="card card-result">
                            <div className="content card-content">
                                <h3>Your results</h3>
                                3 of 9<br></br>
                                56%<br></br>
                                your time:50%;<br></br>
                                <input type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" value="Launch Modal" />
                                {/* <button className="btn btn-success" >Try again</button> */}
                            </div>
                        </div>



                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Your Answers</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Hello, below is some text in a div that should start scrolling if the height of the modal exceeds the browser.
                                        <p><div id="scrollbox">
                                            {
                                                modal.map((curElem) => {
                                                    const { label, options } = curElem;
                                                    return (
                                                        <>

                                                            <div className="container">
                                                                <div className="row">
                                                                    <br />

                                                                    <h5 className="labelques">{label}</h5>
                                                                    <br />
                                                                    <br />
                                                                    <div className="changehero">

                                                                        {options.map((opElem) => {
                                                                            const { value } = opElem;
                                                                            return (
                                                                                <>

                                                                                    <div class="form-floating mb-3">
                                                                                        <label type="email" class="form-control btn btn-danger" id="floatingInput" placeholder="name@example.com" >  {value}</label>


                                                                                    </div>
                                                                                    <br />
                                                                                    <br />


                                                                                </>)
                                                                        })}
                                                                        {options.filter(x => x.is_correct).map((opElem) => {
                                                                            const { value } = opElem;
                                                                            return (
                                                                                <>

                                                                                    <div class="form-floating mb-3">
                                                                                        <label type="email" class="form-control btn btn-primary" id="floatingInput" placeholder="name@example.com" >{value}</label>

                                                                                    </div>
                                                                                </>
                                                                            )
                                                                        })}

                                                                        <br />
                                                                        <br />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>


                                                    )
                                                })
                                            }




                                        </div>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </>}

                </div>

            </div>

        </>
    )
}

export default QuestionSession
