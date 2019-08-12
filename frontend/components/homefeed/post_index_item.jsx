import React from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post,  props }) => {
  return (
    // <li className="photo-post-index">
        <Link to={`/posts/${post.id}`} className="photo-index-title">
           <img className="photo-post-index-photo" src={post.photoUrl} />
      </Link> 

    // </li>
  );
};

export default PostIndexItem;
