import * as PostAPIUtil from '../util/posts_api_util'

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const REMOVE_POST = 'REMOVE_POST'
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS'
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS'


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

const receivePostErrors = (errors) => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

export const clearPostErrors = () => {
    return ({
        type: CLEAR_POST_ERRORS,
    });
};

export const fetchPost = id => dispatch => (
    PostAPIUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
)

export const fetchAllPosts = () => dispatch => (
    PostAPIUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)),
        err => dispatch(receivePostErrors(err.responseJSON)))

)

export const createPost = (post) => dispatch => (
    PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)),
        err => dispatch(receivePostErrors(err.responseJSON)))
)

export const updatePost = (post) => dispatch => (
    PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)), 
        err => dispatch(receivePostErrors(err.responseJSON)))
)

export const deletePost = (postId) => dispatch => (
    PostAPIUtil.deletePost(postId).then(post => dispatch(removePost(postId)),
        err => dispatch(receivePostErrors(err.responseJSON)))
)
