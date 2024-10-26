import React from "react";
import AvatarImg from "../../Assets/ava.jpg";
import css from "./usercard.css"

export default function UserCard(){
    return(
        <div className="card">
        <div className="Avathar">
         <img src={AvatarImg} alt="$"/>
         </div>

       <div className="content">
       <h1>Ganesh</h1>
        <p>where are you</p>
       </div>
     
       <div className="time">
       <p>5:00</p>
       </div>
        
        <div className="circle">
         <p>5</p>
        </div>       
      


        </div>
    )
}