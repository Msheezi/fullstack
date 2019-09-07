import {
    RECEIVE_CATEGORY,
    RECEIVE_ALL_CATEGORIES
    
} from "../actions/category_actions";
import { merge } from "lodash";

const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_CATEGORIES:
            newState = {};
            action.categories.forEach(el => (newState[el.id] = el));
            return merge({}, state, newState);
        case RECEIVE_CATEGORY:
            newState = merge({}, state)
            newState[action.category.id] = action.category
            return newState
        default:
            return state;
    }
};

export default CategoriesReducer;
