import {RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS} from '../actions/comment_actions'
import { merge } from "lodash";

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
                      
            return merge({}, state, action.comments);
        case RECEIVE_COMMENT:
            return merge({}, state, { [action.comment.id]: action.comment });
                default:
            return state;
    }
};

export default CommentsReducer;