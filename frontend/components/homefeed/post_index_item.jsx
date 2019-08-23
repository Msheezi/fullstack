import React from "react";
import { Link } from "react-router-dom";




const PostIndexItem = ({ post,  props }) => {
  
  let postId = post.id
  
  return (
    
      
        <img className="photo-post-index-photo" src={post.photoUrl} onClick={(e,postId) => props.history.push(`/posts/${post.id}`)}/>
     
    
    
   
  );
};

export default PostIndexItem;
