import React from 'react'
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, deletePost }) => (
    <li>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
        <img src={post.photoUrl}/>

        {/* <button onClick={deletePost(post.id)}>Delete</button> */}
    </li>
);


export default PostIndexItem;