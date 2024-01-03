import React from 'react';  
import s from './DialogItem_style/DialogItem.module.css';  
import { NavLink } from "react-router-dom"; 

const DialogItem = (props) => {
	//	console.log(props); 	
	let path = "/dialogs/" + props.id; 

	return (
	<div className={s.dialog}>
		<NavLink className={s.dialogLink} to={path}> {props.name} </NavLink>  
	</div>
	); 
} 

export default DialogItem;  








