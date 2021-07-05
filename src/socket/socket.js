import { io } from "socket.io-client";

const connect = () => {
  try {
    if (localStorage.getItem("socket") == null) {
      const socket = io("http://localhost:3001", {
        transports: ["websocket"],
        upgrade: false,
      });

      console.log("here", socket);
      localStorage.setItem("socket", socket);

      socket.on("connect", () => {
        localStorage.setItem("socket", socket);
      });

      socket.on("disconnect", () => {
        localStorage.removeItem("socket");
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
