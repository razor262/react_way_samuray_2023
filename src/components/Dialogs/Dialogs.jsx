import React from 'react'; 
import s from './Dialogs_style/Dialogs.module.css'; 
import { NavLink } from "react-router-dom"; 

const DialogItem = (props) => {
	console.log(props); 	
	let path = "/dialogs/" + props.id; 

	return (
	<div className={s.dialog}>
		<NavLink to={path}> {props.name} </NavLink>  
	</div>
	); 
} 

const Message = (props) => {
	return (
		<div>
			<div className={s.dialog}>{props.message}</div>
		</div>
	); 
}

const Dialogs = (props) => {	
	
	let dialogsData = [
		{id: 1,name: "Dimych"}, 
		{id: 2,name: "Andrew" },
		{id: 3, name: "Sveta"}, 
		{id: 4, name: "Shasha"}, 
		{id: 5, name: "Viktor"}, 
		{id: 6, name: "Valera"}
	];  
	
	let messagesData = [
		{id: 1, message: "Hi"}, 
		{id: 2, message: "How are you?" },
		{id: 3, message: "Hello"}, 
		{id: 4, message: "Yo"}, 
		{id: 5, message: "Yo"}, 
		{id: 6, message: "Yes"}
	];  

	return (
		  <div className={s.content}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} /> 	
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> 	
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> 	
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> 	
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} /> 	
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id} /> 	
			</div>   
			<div className={s.messages}>	
				<Message message={messagesData[0].message} />	
				<Message message={messagesData[1].message} />	
				<Message message={messagesData[2].message} />	
				<Message message={messagesData[3].message} />	
				<Message message={messagesData[4].message} />	
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

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}
В этом примере App содержит <Router>, который определяет контекст для навигации, и два маршрута (<Route>), которые соответствуют URL-адресам "/" и "/about". Когда URL-адрес изменяется, соответствующий компонент будет отображен. 

*/}  









