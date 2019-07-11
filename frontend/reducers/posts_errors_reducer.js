import {RECEIVE_POST_ERRORS, CLEAR_POST_ERRORS} from '../actions/posts_actions'
import { RECEIVE_CURRENT_USER} from '../actions/session_actions'


const postsErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return []
        case RECEIVE_POST_ERRORS:
            
            return action.errors
        case CLEAR_POST_ERRORS:
            return [];
        default:
            return oldState
    }
}


export default postsErrorsReducer