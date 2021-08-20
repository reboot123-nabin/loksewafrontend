import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const Userdetails = () => {

    const[text,setText]=useState("Pending");
    const[color,setColor]=useState("");
 
    const buttonchange = ()=>{
        
       handletopup();
    }
    const handletopup = () => {
        confirmAlert({
            title: 'Topup request',
            message: 'Are you sure you want to topup?',
            buttons: [
                {
                    label: 'Yes',
                    onClick:()=>{
                        setText("done")
                        setColor("green")
                    }
                },
                {
                    label: 'Cancel',
                }
            ]
        });
    }
    return (
        <>
        <AdminNavbar/>
        
        <div className="userstastics">
        <div className="cardBox">
        <div className="card">
                    <div>
                        <div className="numbers">234</div>
                        <div className="cardName">Total registered user</div>
                    </div>
                    <div className="iconBox">
                    <i class="fa fa-user-plus"></i>
                    </div>
                </div>
                
                <div className="card">
                    <div>
                        <div className="numbers">1,041</div>
                        <div className="cardName">Active user</div>
                    </div>
                    <div className="iconBox">
                    <i class="fa fa-eye"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Quiz Played</div>
                    </div>
                    <div className="iconBox">
                    <i class="fa fa-check-circle"></i>
                    </div>
                </div>

              

                <div className="card">
                    <div>
                        <div className="numbers">123</div>
                        <div className="cardName">Topup Request</div>
                    </div>
                    <div className="iconBox">
                    <i class="fa fa-arrow-up"></i>
                    </div>
                </div>

            </div>
            {/* <details */}

            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h4>Topup Request</h4>
                        <NavLink to="/viewuserdetails" className="detailBtN">View All</NavLink>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                               
                                <td>Status</td>
                               
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td>Nabin magar</td>
                               
                                <td><button className="status pending" onClick={buttonchange} style={{background:color}}>{text}</button></td>
                            </tr>
                          

                    
                          

                
                        </tbody>
                    </table>

                </div>

                    {/* recent customers */}
                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h5>Recent registered users</h5>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td width="60px"><div className="imgBx">
                                    <img src="./images/black.jpg" alt="user" /></div></td>
                                <td><h4>David<br/><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx">
                                    <img src="./images/black.jpg" alt="user" /></div></td>
                                <td><h4>David<br/><span>Nepal</span></h4></td>
                            </tr>
                         
                        
                        </tbody>
                    </table>
                    
                </div>

                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h5>Most Reward Holder</h5>
                        
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td width="60px"><div className="imgBx">
                                    <img src="./images/black.jpg" alt="user" /></div></td>
                                <td><h4>David<br/><span>Korea</span></h4></td>
                            </tr>
                            <tr>
                                <td width="60px"><div className="imgBx">
                                    <img src="./images/black.jpg" alt="user" /></div></td>
                                <td><h4>David<br/><span>Japan</span></h4></td>
                            </tr>
                         
                        
                        </tbody>
                    </table>
                    
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Userdetails
