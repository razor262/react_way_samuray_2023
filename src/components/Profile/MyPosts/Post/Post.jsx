import React from "react";
import s from './Post_style/Post.module.css';  
import consumer from "./image/consumer3.png";

const Post = (props) => {
	 	
	return (
			<div className={s.item}>
				<img src={consumer} alt="Judy smoking" />
				{props.message}	
			<div>	
				<span>like:</span>{props.likesCount}  	
			</div> 	
			</div>
  );
};

export default Post; 







