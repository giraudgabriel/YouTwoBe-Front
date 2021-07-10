import store from "../store/index";
import { setName } from "../actions/index";

let hub;

class RoomService {
  getHub() {
    hub = store.getState().socket.socket;
    return hub;
  }

  joinRoom(name, roomName) {
    this.getHub();
    hub?.emit("joinRoom", { name, roomName });
    store.dispatch(setName(name));
  }

  createRoom(name, roomName) {
    this.getHub();
    hub?.emit("createRoom", { name, roomName });
    store.dispatch(setName(name));
  }

  sendMessage(room, text) {
    this.getHub();
    hub?.emit("sendMessage", { room, text });
  }

  playVideo(room) {
    this.getHub();
    hub?.emit("playVideo", room);
  }

  pauseVideo(room) {
    this.getHub();
    hub?.emit("pauseVideo", room);
  }

  setUrl(room, url) {
    this.getHub();
    hub?.emit("setUrl", { room, url });
  }
}

export default new RoomService();
