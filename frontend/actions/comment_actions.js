import * as CommentApiUtil from '../util/comments_api_util'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})


const receiveComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})


export const fetchComments = () => dispatch => (
    CommentApiUtil.fetchComments().then(comments => dispatch(receiveComments(comments)))
)


export const fetchComment = (id) => dispatch => (
    CommentApiUtil.fetchComment(id).then(comment => dispatch(receiveComment(comment)))
)