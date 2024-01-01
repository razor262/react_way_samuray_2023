import React from "react";
import s from './MyPosts_style/MyPosts.module.css';  
// import consumer from "./image/consumer3.png";
import Post from './Post/Post.jsx'; 

const MyPosts = () => {
  return (
    <div className={s.postsBlock} >
		<h3>My posts</h3> 
		<div>
		<div>
			<textarea></textarea>   
		</div>
		<div>
			<button>Add post</button>  	
		</div>
	    </div>
		<div className={s.posts}> 
			<Post message='Hi, how are you?' likesCount='15' />  	
			<Post message="It's my first post" likeCount='20' />  	
		</div>
	  </div>
  );
};

export default MyPosts; 







