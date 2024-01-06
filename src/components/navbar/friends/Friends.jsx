import React from "react";  
import s from "./Friends_style/Friends.module.css";  
import UserElement from "./UserElement/UserElement";  
/*
	Этот объект приходит сюда из стейт

	sidebar : {
		users : [
			{id: 1, user: "Andrew"}, 
			{id: 2, user: "Sasha"}, 
			{id: 3, user: "Sveta"} 
		] 
	}
*/ 
const Friends = (props) => {
	   
	let resultUser = props.state.users.map((item) => {
		return <UserElement user={item.user} id={item.id} /> 	
	});  

	return (
		<div className={s.navbar}>
			<h3>FRIENDS</h3> 			 	
			 { resultUser }  	
		</div>
	)
}

export default Friends;  


