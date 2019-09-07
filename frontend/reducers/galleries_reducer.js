import {
    RECEIVE_GALLERY,
    RECEIVE_ALL_GALLERIES,
    REMOVE_GALLERY
} from "../actions/gallery_actions";
import { merge } from "lodash";

const GalleriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_GALLERIES:
            newState = {};
            action.galleries.forEach(el => (newState[el.id] = el));
            return merge({}, state, newState);
        case RECEIVE_GALLERY:
            newState = merge({}, state)
            newState[action.gallery.id] = action.gallery
            return newState
        case REMOVE_GALLERY:
            newState = merge({}, state);
            delete newState[action.galleryId];
            return newState;
        default:
            return state;
    }
};

export default GalleriesReducer;