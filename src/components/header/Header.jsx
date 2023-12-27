import React from 'react';  
import s from './header_style/Header.module.css'; 
// импортирует изображение и кладет в переменную logo
import logo from './image/logo1.png';  

// присваивает изображение из переменной logo в src 
const Header = () => {
  return (
	  <header className={s.header}>
		<img src={logo} alt="logo image" />
	  </header>
  );
} 

export default Header;  


