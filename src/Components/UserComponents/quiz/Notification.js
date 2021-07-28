
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom";


export const Notification = () => {
   
    return (
        <>
       
  <div className="icon" onclick="toggleNotifi()">
    <img src="img/bell.png" alt /> <span>17</span>
  </div>
  <div className="notifi-box" id="box">
    <h2>
      Notifications <span>17</span>
    </h2>
    <div className="notifi-item">
      <img src="img/avatar1.png" alt="img" />
      <div className="text">
        <h4>Elias Abdurrahman</h4>
        <p>@lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="notifi-item">
      <img src="img/avatar2.png" alt="img" />
      <div className="text">
        <h4>John Doe</h4>
        <p>@lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="notifi-item">
      <img src="img/avatar3.png" alt="img" />
      <div className="text">
        <h4>Emad Ali</h4>
        <p>@lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="notifi-item">
      <img src="img/avatar4.png" alt="img" />
      <div className="text">
        <h4>Ekram Abu </h4>
        <p>@lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="notifi-item">
      <img src="img/avatar5.png" alt="img" />
      <div className="text">
        <h4>Jane Doe</h4>
        <p>@lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
        </>
    )
}

export default Notification
