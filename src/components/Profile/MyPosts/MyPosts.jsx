import React from "react";
import s from './MyPosts_style/MyPosts.module.css';  
// import consumer from "./image/consumer3.png";
import Post from './Post/Post.jsx'; 

const MyPosts = () => {
  return (
    <div>
		My posts
		<div>
			<textarea></textarea>   
			<button>Add post</button>  	
			<button>Remove</button>  	
	    </div>
		<div className={s.posts}> 
			<Post message='Hi, how are you?' count='15' />  	
			<Post message="It's my first post" count='20' />  	
		</div>
	  </div>
  );
};

export default MyPosts; 







