import React,{useState} from 'react';
import AdminNavbar from '../AdminNavbar';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Viewalluserdetails = () => {

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

        <div className="viewuseralldetails">
            <div className="container viewuserdetails">
               
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h4>Topup Request</h4>
                      
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
                                <td><button className="status pending" onClick={buttonchange} 
                                style={{background:color}}>{text}</button></td>
                            </tr>
                        
                
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
            
        </>
    )
}

export default Viewalluserdetails
