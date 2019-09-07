import {combineReducers} from 'redux'
import UsersReducer from './users_reducer'
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';
import GalleriesReducer from './galleries_reducer'
import CategoriesReducer from './categories_reducer';

 const entitiesReducer = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    galleries: GalleriesReducer,
    categories: CategoriesReducer
})

export default entitiesReducer