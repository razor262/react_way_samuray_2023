import React from 'react'; 

const state = { 
	profilePage : {	
		posts : [
			{id: 1, message: "Hi, how are you?", likesCount: 15 }, 
			{id: 2, message: "It's my first post", likesCount: 20 },
			{ id: 3, message: "Blabla", likesCount: "10" },
			{ id: 4, message: "Dada", likesCount: "345" },
		]    
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

export default state;
