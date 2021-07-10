import { SET_SOCKET, SET_ROOM, SET_NAME } from "../../../actions/types";

const INITIAL_STATE = {
  socket: undefined,
  room: undefined,
  name: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socket: action.payload };
    case SET_ROOM:
      return { ...state, room: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
