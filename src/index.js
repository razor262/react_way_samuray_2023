import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/State'; 
import { addPost } from './components/redux/State'; // импортировать
import { updateNewPostText } from './components/redux/State'; 
// должны строго под тем именем   
// которое экспортируется    
// import render from './components/redux/render.js'; 
// addPost('SamuraiJS.COM');  

export let rerenderEntireTree = (props) => {

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={ state } addPost={ addPost }
	updateNewPostText = { updateNewPostText }
	/>
  </React.StrictMode>
);

} 

	rerenderEntireTree(); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
