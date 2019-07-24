import React from 'react'
import { Link } from 'react-router-dom';

const PostIndexItem = ( { post, deletePost, props }) => {


  return   (
        <li className='photo-post-index'>
        {/* debugger */}
        <img className='photo-post-index-photo' src={post.photoUrl}/>
        {/* <p>{state.entities.users[post.author_id].first_name}</p> */}
        <br/>
        <Link to={`/posts/${post.id}`} className="photo-index-title">{post.title}</Link>
        
        <br/>

        {/* <button onClick={(e)=> deletePost(post.id, e).then(()=>props.fetchPosts())}>Delete</button> */}
    </li>
);
}


export default PostIndexItem;