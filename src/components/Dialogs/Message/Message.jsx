import React from 'react';  
import s from './Message_style/Message.module.css';  

const Message = (props) => {
	return (
		<div className={s.message} >
			<div className={s.dialog}>{props.message}</div>
		</div>
	); 
}

export default Message;  








