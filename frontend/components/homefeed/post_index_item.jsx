import React from 'react'
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, deletePost }) => (
    <li className='photo-post-index'>
        <img className='photo-post-index-photo' src={post.photoUrl}/>
        {/* <p>{state.entities.users[post.author_id].first_name}</p> */}
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
        <br/>

        {/* <button onClick={deletePost(post.id)}>Delete</button> */}
    </li>
);


export default PostIndexItem;