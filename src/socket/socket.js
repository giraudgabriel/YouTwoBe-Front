import { io } from "socket.io-client";
import store from "../store";
import { setSocket } from "../actions";

const connect = () => {
  try {
    const { getState, dispatch } = store;
    const { socket } = getState().socket;

    if (socket == null) {
      const socketIo = io("http://localhost:3001", {
        transports: ["websocket"],
        upgrade: false,
      });

      dispatch(setSocket(socketIo));

      socketIo.on("connect", () => {
        dispatch(setSocket(socketIo));
      });

      socketIo.on("disconnect", () => {
        dispatch(setSocket(null));
      });

      socketIo.on("roomUpdate", (data) => {
        console.log(data);
      });
    }
  } catch (error) {
    console.error(error);
    setTimeout(() => {
      connect();
    }, 5000);
  }
};

export { connect };
