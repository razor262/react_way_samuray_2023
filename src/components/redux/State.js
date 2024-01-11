import React from 'react'; 
import Render from './Render.js'; 

const state = { 
	profilePage : {	
		posts : [
			{id: 1, message: "Hi, how are you?", likesCount: 15 }, 
			{id: 2, message: "It's my first post", likesCount: 20 },
			{ id: 3, message: "Blabla", likesCount: "10" },
			{ id: 4, message: "Dada", likesCount: "345" },
		],    
		newPostText: 'it-kamasutra.com' 	
	}, 
	
	messagesPage : {
		dialogs : [
			{id: 1,name: "Dimych"}, 
			{id: 2,name: "Andrew" },
			{id: 3, name: "Sveta"}, 
			{id: 4, name: "Shasha"}, 
			{id: 5, name: "Viktor"}, 
			{id: 6, name: "Valera"}
		],  

		messages : [
			{id: 1, message: "Hi"}, 
			{id: 2, message: "How are you?" },
			{id: 3, message: "Hello"}, 
			{id: 4, message: "Yo"}, 
			{id: 5, message: "Yo"}, 
			{id: 6, message: "Yes"}
		]   
	}, 	
	sidebar : {
		users : [
			{id: 1, user: "Andrew"}, 
			{id: 2, user: "Sasha"}, 
			{id: 3, user: "Sveta"} 
		] 
	}

} 

export let addPost = (postMessage) => { // экспортирует именно этот объект по названию   
	// debugger; 
	let newPost = {
		id: 5, 
		message: state.profilePage.newPostText,  
		likesCount: 0  
	} 
	state.profilePage.posts.push( newPost );  // добавляет объект newPost в конец массив   
	// debugger; 
	Render(state);  // вызывает функцию рендер в файле рендер
	//которая заново все перерисовывает все компоненту  
};  

export let updateNewPostText = (newText) => {    
	// debugger; 
	state.profilePage.newPostText = newText;      
	console.log('work'); 
};  

export default state; 



