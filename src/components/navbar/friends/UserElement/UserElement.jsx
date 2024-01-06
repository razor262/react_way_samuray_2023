import React from "react";
import s from "./UserElement_style/UserElement.module.css";  
import user from "./image/user.png"; 

const UserElement = (props) => {
	  	
	return (
		<div className={s.userContent} >
			<img src={user} alt="user" /> 	
			<div className={s.users}>{props.user}</div>
		</div>
	); 
}

export default UserElement;  

