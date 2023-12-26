import React from 'react';  
import s from './header_style/Header.module.css'; 
import logo from './image/logo1.png';  

const Header = () => {
  return (
	  <header className={s.header}>
        <img src={logo} alt="logo image" />
      </header>
  );
} 

export default Header;  


