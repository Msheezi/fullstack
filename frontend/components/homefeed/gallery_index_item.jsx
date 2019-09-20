import React, { useRef } from "react";
import { Link } from "react-router-dom";

const GalleryIndexItem = ({ post, props, gallery, length}) => {
  let betterUrl = post.photoUrl.split("?")[0];
  

  return (
   <div className="gallery-index-item-container">
      <img
       
        className="gallery-index-photo"
        src={`https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,w_360/${betterUrl}`}
        onClick={e => props.history.push(`/galleries/${gallery.id}`)}
        
      />
      <div className="gallery-index-photo-info"
        onClick={e => props.history.push(`/galleries/${gallery.id}`)}>
          <span id="gallery-name">{gallery.name}</span>
            <br/>
          <span id="gallery-count">{length} photos</span>
      </div>
    </div>
  );
};

export default GalleryIndexItem;
