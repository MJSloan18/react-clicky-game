import React from "react";
import "./Oakland.css";


const OaklandCard = props => (

    <div className="card">
            <img alt={props.name} src={props.image} />
        
        <div className="content">
            <ul>
                <li>Name:{props.name}</li>
                <li>Position:{props.position}</li>
            </ul>
        </div>
        
        <span onClick={() => props.removeMember(props.id)} className="remove">x</span>
        
    </div>


);

export default OaklandCard;
