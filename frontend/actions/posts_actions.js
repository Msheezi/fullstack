import * as PostAPIUtil from '../util/posts_api_util'

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const REMOVE_POST = 'REMOVE_POST'


const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});


const receiveAllPosts = (posts) => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

const removePost = (postId) => ({
    type: REMOVE_POST,
    postId
})

export const fetchPost = id => dispatch => (
    PostAPIUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
)

export const fetchAllPosts = () => dispatch => (
    PostAPIUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))

)

export const createPost = (post) => dispatch => (
    PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)))
)

export const updatePost = (post) => dispatch => (
    PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
)

export const deletePost = (postId) => dispatch => (
    PostAPIUtil.deletePost(postId).then(post => dispatch(removePost(postId)))
)
