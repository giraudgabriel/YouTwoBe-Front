import { SET_SOCKET, TOGGLE_CHAT, SET_ROOM } from "./types";
import Router from "next/router";

export const setSocket = (socket) => async (dispatch) => {
  dispatch({ type: SET_SOCKET, payload: socket });
};

export const toggleChat = (value) => async (dispatch) => {
  dispatch({ type: TOGGLE_CHAT, payload: value });
};

export const setRoom = (room) => async (dispatch, getState) => {
  const shouldChangeRoute =
    getState().socket?.room == null && room != undefined;
  dispatch({ type: SET_ROOM, payload: room });
  if (shouldChangeRoute) {
    Router.push("/room/" + room.id);
  }
};
