import { TOGGLE_CHAT } from "../../../actions/types";

const INITIAL_STATE = {
  isChatOpen: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CHAT:
      return { ...state, isChatOpen: action.payload };
    default:
      return state;
  }
};
