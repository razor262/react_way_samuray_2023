import React from "react";
import myImage from "./image/shiroishi1.jpg";
// import consumer from "./image/consumer3.png";
import p from './profile_style/Profile.module.css';  
import MyPosts from './MyPosts/MyPosts';  

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img src={myImage} alt="cyberpunk girl" />
      </div>
      <div>
		ava + description  
	  </div>
		<MyPosts /> 
	</div>
  );
};

export default Profile; 







