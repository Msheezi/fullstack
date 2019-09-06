import React, { useRef } from "react";
import { Link } from "react-router-dom";

const PhotoManagerItem = ({ post, props, handlePhotoSelect }) => {
 
  let betterUrl = post.photoUrl.split("?")[0];
  
  return (
    <img
      
      className="manager-photo-item"
      src={`https://res.cloudinary.com/ddtykf72z/image/fetch/w_160/${betterUrl}`}
      onClick={handlePhotoSelect}
    />
  );
};

export default PhotoManagerItem;
