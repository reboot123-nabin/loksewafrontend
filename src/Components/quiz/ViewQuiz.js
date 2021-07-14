import React from 'react';
import QuizQuestion from '../CommonComponents/QuizQuestion';

export const ViewQuiz = () => {
    return (
        <>
          <QuizQuestion></QuizQuestion> 
        <div className="bg-light h-100 w-100">
        <div className="container-fluid viewone">
        <div className="row">
            <div className="col-md-10 col-11 mx-auto">
                <div className="row mt-5 gx-3">
                   
                    <div className="col-md-12 col-lg-6 col-11 mx-auto mt-lg-0 mt-md-5">
                        <div className="right_side p-3 shadow bg-white">
                      
                            <div className="price_indiv d-flex justify-content-between">
                                <p>Title</p>
                                <p><span id="product_total_amt">Education</span></p>
                            </div>
                            <div className="price_indiv d-flex justify-content-between">
                                <p>Start</p>
                                <p><span id="shipping_charge"></span></p>
                            </div>
                            <div className="price_indiv d-flex justify-content-between">
                                <p>End</p>
                                <p><span id="shipping_charge"></span></p>
                            </div>
                            <div className="price_indiv d-flex justify-content-between">
                                <p>Difficulty</p>
                                <p><span id="shipping_charge"></span></p>
                            </div>
                            <div className="price_indiv d-flex justify-content-between">
                                <p>Category</p>
                                <p><span id="shipping_charge"></span></p>
                            </div>
                  
                        </div>

                      <div className="discount_code mt-3 shadow">
                            <div className="card">
                                <div className="card-body">
                                  <h5>Assigned question</h5>
                                  <label className="form-control">Question</label>
                               
                              
                                </div>
                            </div>
                      
                            
                        </div> 
                    </div>

                    <div className="col-md-12 col-lg-6 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                        <div className="card  p-4">
                          <h5>Question List</h5>
                        <label className="form-control">Question</label>
                            
                            <div className="row">
                      
                                <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                                    <div className="row">
                                    
                                    </div>
                                 

                                    <div className="row">
                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    
                        <div className="card p-4">
                           
                            <div className="row">
                        
                                <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                                    <div className="row">
                        
                                    </div>
                                  
                                    <div className="row">
                                    </div>
                                </div>
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

export default ViewQuiz
