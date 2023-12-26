import React from "react";
import myImage from "./image/shiroishi.jpeg";
import consumer from "./image/consumer.jpg";
import p from './profile_style/Profile.module.css';  

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img src={myImage} alt="cyberpunk girl" />
      </div>
      <div className={p.content__ava_description}>
        <img src={consumer} alt="cyberpunk consumer" />
        <div>
          <h3>Александра, 28 Night City</h3>
          <p>Думала разденусь ко мне все придут и я такая вау.</p>
        </div>
      </div>
      <div>My posts</div>
      <div>New post</div>
	<div className={p.posts}> 
	  <div className={p.item}>
		post 1
	  </div>
      <div className={p.item}>
		post 2
	  </div>
    </div>
  </div>
  );
};

export default Profile;
