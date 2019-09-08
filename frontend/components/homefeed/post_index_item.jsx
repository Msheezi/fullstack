import React, { useRef } from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post, props }) => {
  // const imgRef = useRef(null);
  // let postId = post.id;
  let betterUrl = post.photoUrl.split("?")[0];
  // console.log(imgRef);
  return (
    
    <img
      // ref={imgRef => console.log(imgRef && imgRef.naturalWidth)}
      className="photo-post-index-photo"
      src={`https://res.cloudinary.com/ddtykf72z/image/fetch/w_500/${betterUrl}`}
      onClick={e => props.history.push(`/posts/${post.id}`)}
    />
    
  );
};

export default PostIndexItem;
