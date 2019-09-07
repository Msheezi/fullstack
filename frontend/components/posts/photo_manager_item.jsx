import React, { useRef } from "react";


const PhotoManagerItem = ({ post, props, handlePhotoSelect, cssClass }) => {
 
  let betterUrl = post.photoUrl.split("?")[0];
  
  return (
    <img
      
      className={cssClass ? "manager-photo-item-selected": "manager-photo-item"}
      src={`https://res.cloudinary.com/ddtykf72z/image/fetch/w_160/${betterUrl}`}
      onClick={handlePhotoSelect}
    />
  );
};

export default PhotoManagerItem;
