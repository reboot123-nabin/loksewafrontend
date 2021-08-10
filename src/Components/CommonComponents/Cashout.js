import React from 'react';
import Header from './Header';
import { confirmAlert } from 'react-confirm-alert';


const Cashout = () => {

    const submitconfirm = () => {
        confirmAlert({
            title: 'Purchase Qn?',
            message: 'Are you sure you want to purchase question?',
            buttons: [
                {
                    label: 'Yes',
                   
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
        <div className="Cashout">
            <h5 className="text-center">From here you can Purchase Your Questions</h5>
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
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                            
                        </div>
                        <p className="buyquestion" style={{marginLeft:'5%'}}>Others</p>
                        </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={submitconfirm}>Confirm</button>
                        </div>
                        </div>
                    </div>
                    </div>
                  
                    
                    </div>

                    <div className="col-md-6">
                    
                    <button type="button" className="btn btn-primary mt-3 py-4" style={{marginLeft:'10%'}} data-toggle="modal" data-target="#exampleModal">
                   Top up Mobile
                    </button>


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
        </div>
        
            
        </>
        
    )
}

export default Cashout
