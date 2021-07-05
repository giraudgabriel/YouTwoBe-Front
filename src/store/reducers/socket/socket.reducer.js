import { SET_SOCKET } from "../../../actions/types";

const INITIAL_STATE = {
  socket: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socket: action.payload };
    default:
      return state;
  }
};
