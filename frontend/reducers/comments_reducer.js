import {RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS} from '../actions/comment_actions'
import { merge } from "lodash";

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:   
            newState = {};
            action.comments.forEach(el => (newState[el.id] = el))
            
            return merge({}, state, newState);
        case RECEIVE_COMMENT:
            newState = merge({}, state)
            newState[action.comment.id] = action.comment
            return newState;
                default:
            return state;
    }
};

export default CommentsReducer;