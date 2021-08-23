import React,{useState,useEffect} from 'react';
import AdminNavbar from '../AdminNavbar';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from "react-router-dom";
const Viewalluserdetails = () => {
    const history = useHistory();

    const[text,setText]=useState("Pending");
    const[color,setColor]=useState("");
    const[user,setUser]=useState("");
    const setViewPage = async () => {
        try {
            const res = await fetch('/api/v1/userdata', {
                method: "GET",
                headers: {

                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },

            });
            const data = await res.json();
            console.log(data.data);
            setUser(data.data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');

        }
    }
    useEffect(() => {
        setViewPage();
    });
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

                    {
                                                user.map((curElem) => {
                                                    const { first_name, last_name,email,phone } = curElem;
                                                    return (
                                                        <>


                                                           {first_name}
                                                           {last_name}
                                                           {email}
                                                           {phone}



                                                        </>


                                                    )
                                                })
                                            }
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
