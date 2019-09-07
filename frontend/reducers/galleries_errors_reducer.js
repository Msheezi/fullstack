import { RECEIVE_GALLERY_ERRORS, CLEAR_GALLERY_ERRORS } from '../actions/gallery_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


const galleriesErrorsReducer = (oldState = [], action) => {

    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return []
        case RECEIVE_GALLERY_ERRORS:

            return action.errors
        case CLEAR_GALLERY_ERRORS:
            return [];
        default:
            return oldState
    }
}


export default galleriesErrorsReducer