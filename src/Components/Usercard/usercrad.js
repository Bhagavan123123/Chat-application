import React from "react";
import AvatarImg from "../../Assets/ava.jpg";
import css from "./usercard.css"

export default function UserCard(){
    return(
  <div className="whatapp-user-card">
<div className="user-image">
<img src={AvatarImg} alt="bhagavan-img"/>
</div>
<div className="user-details">
    <div className="user-name-time">
    <div className="user-name">
        <p>Bhagavan</p>
    </div>
    <div className="user-time">
        <p>5:30</p>
    </div>
    </div>

    <div className="user-message">
        <div className="message-text">
            <p> where are you ?</p>
        </div>
        <div className="user-message-count">
            <p>6</p>
        </div>
    </div>
</div>
  </div>
    )
}