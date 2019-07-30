import {
  RECEIVE_POST,
  RECEIVE_ALL_POSTS,
  REMOVE_POST
} from "../actions/posts_actions";
import { merge } from "lodash";

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      newState = {};
      action.posts.forEach(el => (newState[el.id] = el));
      return merge({}, state, newState);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
