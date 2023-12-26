import React from 'react';  
import './navbar_style/Navbar.css'; 

const Nav = () => {
    return (
    <nav className="nav">
        <div className="item">
          <a> Profile </a>
        </div>
        <div className="item">
          <a> Messages </a>
        </div>
        <div className="item">
          <a> News </a>
        </div>
        <div className="item">
          <a> Music </a>
        </div>
        <div className="item">
          <a> Profile </a>
        </div>
        <div className="item">
          <a> Settings </a>
        </div>
        <div className="item">
		   <a> Messages </a> 
		</div>
      </nav> 
    ); 
} 

export default Nav;  