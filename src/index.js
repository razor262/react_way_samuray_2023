import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const state = { 
	posts : [
		{id: 1, message: "Hi, how are you?", likesCount: 15 }, 
		{id: 2, message: "It's my first post", likesCount: 20 } 
	],   

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
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
