import {combineReducers} from 'redux'
import UsersReducer from './users_reducer'
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';

 const entitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer
})

export default entitiesReducer