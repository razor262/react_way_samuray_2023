import React from "react";
import s from './MyPosts_style/MyPosts.module.css';  
import Post from './Post/Post.jsx'; 

const MyPosts = (props) => {
	// debugger;     
	let postsElements = props.state.posts.map( p => {
		return <Post message={p.message} likesCount={p.likesCount} />  	
	}); 

	let newPostElement = React.createRef(); 

	let addPost = () => {
		let text = newPostElement.current.value; 
		props.addPost( text ); 
	}  
 
	let onPostChange = () => {
		let text = newPostElement.current.value; 
		props.updateNewPostText(text);	  
	} 
 
	return (
    <div className={s.postsBlock} >
		<h3>My posts</h3> 
		<div>
		<div>
			<textarea 
			onChange={ onPostChange }  
			ref={newPostElement} 
			newPostText={ props.state.newPostText } 
			/>    
		</div>
		<div>
			<button onClick={ addPost }>Add post</button>  	
		</div>
	    </div>
		<div className={s.posts}> 
			{ postsElements }
		</div>
	  </div>
  );
};

export default MyPosts; 







