import RECEIVE_COMMENT from '../actions/posts_actions'
import { merge } from "lodash";

const CommentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_COMMENT:
            newState = {};
            action.comment.forEach(el => (newState[el.id] = el));
            return merge({}, state, newState);
                default:
            return state;
    }
};

export default CommentsReducer;