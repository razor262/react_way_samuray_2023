import React from 'react';  
import myImage from "./Image/shiroishi1.jpg";
import s from './ProfileInfo_style/ProfileInfo.module.css';  

const ProfileInfo = () => {
	return (
	<> 
	  <div className={s.content}>
        <img src={myImage} alt="cyberpunk girl" />
      </div> 
	  <div className={s.descriptionBlock}>
		ava + description  
	  </div> 
	</> 	
	); 
}

export default ProfileInfo;  


