import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Notification = () => {

    const [notification, setNotification] = useState([])
    const [meta, setMeta] = useState({})


    useEffect(() => {
        const loadNotifications = async () => {
            try {
                const res = await fetch('api/v1/notifications', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                });
                const data = await res.json();

                setMeta(data.meta);
                setNotification(data.data)

                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }

            } catch (err) {
                console.log(err);
                // history.push('/pr');
            }
        }
        loadNotifications()
    }, [])

    return (
        <>
            <div className="notBtn" href="#">
                <>
                    {/*Number supports double digets and automaticly hides itself when there is nothing between divs */}
                    <div className={meta.total > 0 ? 'number' : 'd-none'}>{meta.total}</div>
                    <div className="icon_div">
                        <FaIcons.FaBell title="Notification" className="m-auto" />
                    </div>
                </>
                <div className="notification-box">

                    {
                        meta.total < 1 ? (
                            <div className="nothing">
                                <FaIcons.FaChild style={{fontSize:"x-large"}} className="stick" />
                                <div className="cent">Looks Like your all caught up!</div>
                            </div>
                        ) : (
                            <div className="display">
                                <div className="cont">
                                    <NavLink to="#">
                                        {/* Fold this div and try deleting evrything inbetween */}
                                    </NavLink>
                                    {notification.map((curElem) => {
                                        const { title, message, uri, createdAt } = curElem;
                                        return (
                                            <>
                                                <div className={meta.read === false ? 'sec new m-2' : 'sec mb-2'}>
                                                    <NavLink to={uri}>
                                                        <div className="profCont">
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <FaIcons.FaBullhorn style={{ fontSize: "xx-large" }} />
                                                                </div>
                                                                <div className="col-md-10">
                                                                    <div className="txt">
                                                                        <strong>{title}</strong>
                                                                        <p>{message}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="txt sub">{createdAt}</div>
                                                            <hr />
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )

}
export default Notification;