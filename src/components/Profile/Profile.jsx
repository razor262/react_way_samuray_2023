import React from "react";
import s from './profile_style/Profile.module.css';  
import MyPosts from './MyPosts/MyPosts';  
import ProfileInfo from './ProfileInfo/ProfileInfo';  

const Profile = (props) => {

	return (
    <div className={s.mainContainer}>
	  <ProfileInfo />  
	  <MyPosts state={props.state} /> 
	</div>
  );
};

export default Profile; 







