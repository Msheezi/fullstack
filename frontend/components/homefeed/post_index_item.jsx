import React from 'react'
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, deletePost }) => {


  return   (
        <li className='photo-post-index'>
        {/* debugger */}
        <img className='photo-post-index-photo' src={post.photoUrl}/>
        {/* <p>{state.entities.users[post.author_id].first_name}</p> */}
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        
        <br/>

        <button onClick={(e)=> deletePost(post.id, e)}>Delete</button>
    </li>
);
}


export default PostIndexItem;