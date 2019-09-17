import React, { useRef } from "react";
import { Link } from "react-router-dom";

const GalleryIndexItem = ({ post, props, gallery }) => {
  
  let betterUrl = post.photoUrl.split("?")[0];
  let width = (window.innerWidth * 0.9) / 4;

  return (
    <img
      // ref={imgRef =>
      //   console.log(imgRef, imgRef.naturalWidth, "postid", post.id)
      // }
      className="photo-post-index-photo"
      src={`https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_400/${betterUrl}`}
      onClick={e => props.history.push(`/galleries/${gallery.id}`)}
      style={{ flexGrow: 1, flexBasis: 175 }}
    />
  );
};

export default GalleryIndexItem;
