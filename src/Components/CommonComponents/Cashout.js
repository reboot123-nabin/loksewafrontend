import React, {useState} from 'react';
import Header from './Header';
import { confirmAlert } from 'react-confirm-alert';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Cashout = () => {
    let history = useHistory();
    const [checked, setChecked]=useState()
    const toggleInputBox = (e)=>{
        setChecked(e.target.checked)
      }
    const handleChange = () => setChecked(!checked);
    const[ruppe,setRupee]=useState([]);
  
    const SubmitReward = async () => {
   
        const res = await fetch('/api/v1/top-up/request', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                ruppe
            })
        });

        const data = await res.json();
      
        
        if (!data) {
            toast.error("Something went wrong!");
        }
        else {
            toast.success('Your reward has been transfered!')
            setTimeout(() => {
                history.push('/profile');
            }, 1500)

        }
    }
   
    const submitconfirm = () => {
        confirmAlert({
            title: 'Purchase Qn?',
            message: 'Are you sure you want to purchase question?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => SubmitReward()
              
                   
                },
                {
                    label: 'No',
                }
            ]
        });
    }
    return (
        <>
        <Header/>
        <ToastContainer/>
        {/* <input type="text" defaultValue={ruppe} onChange={(e) => setRupee(e.target.value)} ></input>
            <button className="btn btn-primary" onClick={SubmitReward}/>


            <input type="checkbox" onChange={toggleInputBox} /> Other
      <input type="text" hidden={!checked} /> */}

  
            <h5 className="text-center">From here on you can Purchase Your Questions</h5>
            <hr className="w-50 mx-auto"/>
            <div className="container cashquestion">
                <div className="row">
                    <div className="col-md-6">
                    
                    <button type="button" className="btn btn-primary mt-3 py-4" style={{marginLeft:'25%'}} data-toggle="modal" data-target="#exampleModal">
                    Purchase Question
                    </button>


                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">you can purchase questions from here!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>10 questions</p>
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>15 questions</p>
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>25 questions</p>
                    
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" onClick={handleChange} checked={checked} className="checkme" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>Others</p>
               
                        </div>
                      


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" >Confirm</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  
                    
                    </div>

                    <div className="col-md-6">
                    
                    <button type="button" className="btn btn-primary mt-3 py-4" style={{marginLeft:'10%'}} data-toggle="modal" data-target="#exampleModal1">
                   Top up Mobile
                    </button>

                    <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">you can purchase questions from here!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>5 rupees</p>
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>7 rupees</p>
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>5 rupees</p>
          
                        </div>

                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="checkbox" onChange={toggleInputBox} className="checkme" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>Others</p>
               
                        </div>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <input type="text" hidden={!checked} defaultValue={ruppe} onChange={(e) => setRupee(e.target.value)} ></input>
                        
                            </div>
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={submitconfirm}>Confirm</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  
                    
                    </div>

                   
                </div>

            </div>
        
      
        </>
        
    )
}

export default Cashout
