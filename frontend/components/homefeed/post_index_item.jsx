import React, { useRef } from "react";
import { Link } from "react-router-dom";

const PostIndexItem = ({ post, props }) => {
  // const imgRef = useRef(null);
  // let postId = post.id;
  let betterUrl = post.photoUrl.split("?")[0];
  let width = (window.innerWidth * 0.9) / 4;
  // let myFlexGrow = imgRef.naturalWidth > width ? 2 : 1;

  // console.log(imgRef);
  return (
    <img
      // ref={imgRef =>
      //   console.log(imgRef, imgRef.naturalWidth, "postid", post.id)
      // }
      className="photo-post-index-photo"
      src={`https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_400/${betterUrl}`}
      onClick={e => props.history.push(`/posts/${post.id}`)}
      style={{ flexGrow: 1, flexBasis: "auto" }}
    />
  );
};

export default PostIndexItem;
