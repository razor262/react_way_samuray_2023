import React from "react";
import s from './profile_style/Profile.module.css';  
import MyPosts from './MyPosts/MyPosts';  
import ProfileInfo from './ProfileInfo/ProfileInfo';  

const Profile = () => {
  return (
    <div className={s.mainContainer}>
	  <ProfileInfo />  
	  <MyPosts /> 
	</div>
  );
};

export default Profile; 







