import React, { useEffect } from 'react'
import { useState } from 'react';


const Resultassesment = (props) => {

  const [assessment_data, setAssementData] = useState({})

  useEffect(async () => {
    const fetchAssessment = async () => {
      try {
        const res = await fetch(`/api/v1/quiz/${props.quiz_id}/result-assessment`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        setAssementData(data)
        console.log(data.data)

        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }

      } catch (err) {
        console.log(err);

      }
    }
    fetchAssessment();
  }, [props.quiz_id]);


  return (
    <>
      <div class="card">
        <div className="content card-content">
          <h3>Quiz id: {props.quiz_id}</h3>
          3 of 9<br></br>
          56%<br></br>
          your time:50%;<br></br>
        </div>
      </div>


      {/* {
        assessment_data.map((opElem) => {
          const { questions } = opElem;
          return (
            <>
              {questions.map((curElem) => {

                const { label, category, options } = curElem;
                return (
                  <>
                    {label}
                    {category}


                  </>
                )
              })}

            </>
          )
        })
      } */}







      {/* <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Your Answers</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Hello, below is some text in a div that should start scrolling if the height of
                                        the modal exceeds the browser.
                                        <p>
                                            <div id="scrollbox">
                                                {
                                                    result.map(({question : {label}, options, value : {value}, correct }, elemIndex) => {
                                                        console.log({correct})
                                                        return (
                                                            <div key={elemIndex} className="container">
                                                                <div className="row">
                                                                    <br/>

                                                                    <h5 className="labelques">{label}</h5>
                                                                    <br/>
                                                                    <br/>
                                                                    <div className="changehero">

                                                                        <div>
                                                                            <div className="form-floating mb-3">
                                                                                <label type="email"
                                                                                       className={`form-control btn ${correct ? 'btn-success' : 'btn-danger'}`}
                                                                                       id="floatingInput"
                                                                                       placeholder="name@example.com">  {value}</label>
                                                                            </div>
                                                                            <br/>
                                                                            <br/>
                                                                        </div>

                                                                        <br/>
                                                                        <br/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }


                                            </div>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div> */}


    </>
  )
}

export default Resultassesment
