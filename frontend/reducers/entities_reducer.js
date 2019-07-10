import {combineReducers} from 'redux'
import UsersReducer from './users_reducer'
import PostsReducer from './posts_reducer';

 const entitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer
})

export default entitiesReducer