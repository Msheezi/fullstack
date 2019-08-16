import { OPEN_POST_MODAL, CLOSE_POST_MODAL } from "../actions/ui_actions";
import { merge } from "lodash";

const preLoadedState = {
  postModalOpen: false
};

const uiReducer = (state = preLoadedState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_POST_MODAL:
      return merge({}, state, { postModalOpen: true });
    case CLOSE_POST_MODAL:
      return merge({}, state, { postModalOpen: false });
    default:
      return state;
  }
};

export default uiReducer;
