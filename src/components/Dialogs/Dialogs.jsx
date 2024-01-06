import React from 'react'; 
import s from './Dialogs_style/Dialogs.module.css'; 
import DialogItem from './DialogItem/DialogItem';  
import Message from './Message/Message';  
import TextArea from './textarea/TextArea';   

const Dialogs = (props) => {	
	 
	let dialogsElements = props.state.dialogs.map(d => {
		return <DialogItem name={d.name} id={d.id} /> 	
	});  
	
	let messagesElements = props.state.messages.map(m => {
		return <Message message={m.message} /> 		
	});  
	console.log(messagesElements); 	

	return (
		<div className={s.content}>
			<div className={s.dialogsItems}>
			{ dialogsElements }	
			</div>   
			<div className={s.messages}>	
			{ messagesElements }
			</div>  
		
			<div>
				<TextArea />    
			</div>  
		</div>  
	);   
} 

export default Dialogs;  

{/*
В React роутинг представляет собой механизм навигации между различными компонентами в зависимости от URL-адреса. Для этого часто используется библиотека React Router. Вот основные понятия, связанные с роутингом в React:

Компонент <BrowserRouter>: Обертка, которая используется для определения, как приложение React будет реагировать на изменения URL-адреса.

Компоненты <Route>: Используются для определения соответствия между URL-адресом и компонентом, который должен быть отображен при совпадении.

Динамические пути: Маршруты могут содержать динамические части, которые соответствуют различным URL-адресам. Например, "/users/:id" может соответствовать URL-адресу "/users/123".

Навигация: Для навигации между различными маршрутами используются компоненты <Link>, <NavLink> или функции history.push.

Пример использования React Router для создания роутинга:

*/}  









