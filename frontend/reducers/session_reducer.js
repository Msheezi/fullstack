import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'
import merge from 'lodash'

const _nullSession = {
    currentUser: null,
};

const SessionReducer = (oldState = _nullSession, action) =>{
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return merge({}, {currentUser: action.user.id});
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return oldState
    }
}

export default SessionReducer