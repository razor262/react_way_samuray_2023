import React from 'react';  
import s from './TextArea_style/TextArea.module.css';  

	// --------- text_area ------------ //   
	let newPostElement = React.createRef(); 

	let addPost = () => {
		 
		let text = newPostElement.current.value; 
		alert( text );     	
	}  

const TextArea = (props) => {
	return (
	<>
		<div>
			<textarea ref={newPostElement}></textarea>   
		</div>
		<div>
			<button onClick={ addPost }>Add post</button>  	
		</div>
	</> 	
	)
}

export default TextArea;  






