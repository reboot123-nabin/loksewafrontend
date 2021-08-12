import React from 'react';
import Header from '../CommonComponents/Header';


const Userprofile = () => {
    return (
        <>
        <Header/>
        <div className="container userprofile">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-primary" width="110"/>
                
                                <div className="mt-3">
                                    <h4>Email</h4>
                                    {/* <p className="text-secondary mb-1">FirstName</p>
									<p className="text-muted font-size-sm">LastName</p> */}
									<button className="btn btn-primary">Follow</button>
									<button className="btn btn-outline-primary" style={{marginLeft:'5px'}}>Message</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
					<div className="card">
						<div className="card-body">
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">Email</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="John Doe"/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">FirstName</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="john@example.com"/>
								</div>
							</div>
							<div className="row mb-3">
								<div className="col-sm-3">
									<h6 className="mb-0">LastName</h6>
								</div>
								<div className="col-sm-9 text-secondary">
									<input type="text" className="form-control" value="(239) 816-9029"/>
								</div>
							</div>
						
						
							<div className="row">
								<div className="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" value="Save Changes"/>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<h5 class="d-flex align-items-center mb-3">User Status</h5>
									<p>Yess quiz</p>
									<div class="progress mb-3" style={{height:'5px'}}>
										<div class="progress-bar bg-primary" role="progressbar" style={{width:'80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Userprofile
