import { RECEIVE_CURRENT_USER} from '../actions/session_actions'
import {RECEIVE_USERS} from '../actions/user_actions'
import {merge }from 'lodash'

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USERS:
            newState = {};
            action.users.forEach(el => (newState[el.id] = el));
            return merge({}, oldState, newState);
        default:
            return oldState
    }
}

export default UsersReducer