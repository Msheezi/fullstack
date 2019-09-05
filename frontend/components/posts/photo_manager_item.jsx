import React, { useRef } from "react";
import { Link } from "react-router-dom";

const PhotoManagerItem = ({ post, props, handlePhotoSelect }) => {
  // const imgRef = useRef(null);
  // let postId = post.id;
  let betterUrl = post.photoUrl.split("?")[0];
  // console.log(imgRef);
  return (
    <img
      ref={imgRef => console.log(imgRef && imgRef.naturalWidth)}
      className="manager-photo-item"
      src={`https://res.cloudinary.com/ddtykf72z/image/fetch/w_160/${betterUrl}`}
      onClick={handlePhotoSelect}
    />
  );
};

export default PhotoManagerItem;
