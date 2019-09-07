import {combineReducers} from 'redux'
import sessionErrorsReducer from './session_errors_reducer'
import postsErrorsReducer from './posts_errors_reducer'
import galleriesErrorsReducer from './galleries_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    posts: postsErrorsReducer,
    galleries: galleriesErrorsReducer
})


export default errorsReducer 