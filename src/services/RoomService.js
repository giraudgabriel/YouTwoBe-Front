import store from "../store/index";

let hub;

class RoomService {
  getHub() {
    hub = store.getState().socket.socket;
    return hub;
  }

  joinRoom(name, roomName) {
    this.getHub();
    hub?.emit("joinRoom", { name, roomName });
  }

  createRoom(name, roomName) {
    this.getHub();
    hub?.emit("createRoom", { name, roomName });
  }

  sendMessage(room, text) {
    this.getHub();
    hub?.emit("sendMessage", { room, text });
  }

  playVideo(room, url) {}

  pauseVideo(room) {}
}

export default new RoomService();
