import React, { Profiler } from "react";
import s from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 

const News = () => <h2>Новости</h2>; 
const Music = () => <h2>Музыка</h2>;
const Setting = () => <h2>Настройки</h2>;  

const App = (props) => {
	return (
    <BrowserRouter> 
	  <div className={s.appWrapper}>
		<Header />    
		<Navbar />  
		<div className={s.content}>
		  <Routes> 
	<Route path="/profile" element={<Profile state={props.state} />} />	 
	<Route path="/dialogs" element={<Dialogs state={props.state} />} />	 
	
	<Route path="/news" element={<News />} />	 
	<Route path="/music" element={<Music />} />	 
	<Route path="/setting" element={<Setting />} />	 
		  </Routes> 
		</div>
      </div>
    </BrowserRouter> 
  );
};

export default App;
