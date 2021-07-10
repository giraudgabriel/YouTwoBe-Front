import { VideoContainer } from "./styles";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import RoomService from "../../services/RoomService";

export default function Video({ url }) {
  const { socket, room } = useSelector((state) => state.socket);

  const onPause = () => {
    RoomService.pauseVideo(room.id);
  };

  const onPlay = () => {
    RoomService.playVideo(room.id);
  };

  return (
    <VideoContainer>
      {url ? (
        <ReactPlayer
          url={room.url}
          playing={room.playing}
          onPause={onPause}
          onPlay={onPlay}
        />
      ) : (
        <strong>Aguardando um vídeo para a sala</strong>
      )}
    </VideoContainer>
  );
}
