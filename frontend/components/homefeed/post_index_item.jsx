import React from "react";
import { Link } from "react-router-dom";


// const myRedirect = ({post}) => {

// }

const PostIndexItem = ({ post,  props }) => {
  
  
  
  return (
    // <li className="photo-post-index">
    <span>

        <Link to={`/posts/${post.id}`} className="photo-index-title">
           <img className="photo-post-index-photo" src={post.photoUrl} />
      </Link> 
    </span>


    
      // <img className="photo-post-index-photo" src={post.photoUrl} />
    


    // </li>
  );
};

export default PostIndexItem;
