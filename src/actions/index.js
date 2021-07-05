import { SET_SOCKET } from "./types";

export const setSocket = (socket) => async (dispatch) => {
  dispatch({ type: SET_SOCKET, payload: socket });
};
