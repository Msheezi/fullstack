import { OPEN_POST_MODAL, CLOSE_POST_MODAL, 
OPEN_GALLERY_MODAL, CLOSE_GALLERY_MODAL } from "../actions/ui_actions";
import { merge } from "lodash";

const preLoadedState = {
  postModalOpen: false,
  galleryModalOpen: false
};

const uiReducer = (state = preLoadedState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_POST_MODAL:
      return merge({}, state, { postModalOpen: true });
    case CLOSE_POST_MODAL:
      return merge({}, state, { postModalOpen: false });
    case OPEN_GALLERY_MODAL:
      return merge({}, state, { galleryModalOpen: true})
    case CLOSE_GALLERY_MODAL:
      return merge({}, state, { galleryModalOpen: false })
    default:
      return state;
  }
};

export default uiReducer;
