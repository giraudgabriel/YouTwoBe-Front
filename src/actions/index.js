import { SET_SOCKET, TOGGLE_CHAT } from "./types";

export const setSocket = (socket) => async (dispatch) => {
  dispatch({ type: SET_SOCKET, payload: socket });
};

export const toggleChat = (value) => async (dispatch) => {
  dispatch({ type: TOGGLE_CHAT, payload: value });
};
