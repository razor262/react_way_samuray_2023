import React, { Profiler } from "react";
// import {Component} from 'react';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
		<Header />    
		<Navbar />  
		<Profile />  
    </div>
  );
};

export default App;
