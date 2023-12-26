import React from 'react';  
import './header_style/Header.css'; 
import logo from './image/logo1.png';  

const Header = () => {
  return (
	  <header className="header">
        <img src={logo} alt="logo image" />
      </header>
  );
} 

export default Header;  


