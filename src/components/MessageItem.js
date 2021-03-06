import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const MessageItem=({date, profileImageUrl, username, text, removeMessage, isCorrectUser}) => (
    <div>
        <li className="list-group-item">
        <img src={profileImageUrl || DefaultProfileImg} alt={username} className="timeline-image" width="100" height="100"/>
    
    <div className="message-area">
        <Link to="/">@{username} &nbsp;</Link>
        <span className="text-muted">
            <Moment className="text-muted" format="Do MMMM YYYY">
                {date}
            </Moment>
        </span>
        <p>{text}</p>
        {isCorrectUser && (<a className="btn btn-danger" onClick={removeMessage}>
            Delete
        </a>)}
        
    </div>
    </li>
        </div>
);

export default MessageItem;