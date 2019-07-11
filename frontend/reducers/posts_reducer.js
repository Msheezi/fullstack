import {RECEIVE_POST, 
    RECEIVE_ALL_POSTS, 
    REMOVE_POST} from '../actions/posts_actions'
import { merge } from 'lodash'

const PostsReducer = (state = {}, action) => {

    Object.freeze(state)
    switch(action.type){
        case RECEIVE_POST:
            return merge({}, state, {[action.post.id]: action.post})
        case RECEIVE_ALL_POSTS:
            return merge({}, state, action.posts)
        case REMOVE_POST:
            let newState = merge({}, state)
            delete newState[action.postId]
            return newState;
        default:
            return state;
    }
}

export default PostsReducer