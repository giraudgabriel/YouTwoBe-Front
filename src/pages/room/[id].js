import { useRouter } from "next/dist/client/router";
import {
  Container,
  VideoSection,
  InputContainer,
  VideoInfos,
} from "../../styles/pages/RoomStyles";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import Chat from "../../components/Chat";
import Video from "../../components/Video";
import { useState, useEffect } from "react";
import store from "../../store";
import { useSelector } from "react-redux";
import { BsBoxArrowInUpLeft } from "react-icons/bs";
import { toggleChat, setRoom } from "../../actions";
import Head from "next/head";
import { toast } from "react-toastify";
import RoomService from "../../services/RoomService";

export default function Room() {
  const router = useRouter();
  const { id } = router.query;

  const { dispatch } = store;

  const { layout, socket } = useSelector((state) => state);

  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (id == undefined && socket.room == undefined && socket.name == undefined) {
      router.push("/");
    } else {
      RoomService.joinRoom(socket.name, id);
    }
  }, []);

  function handleOpenChat() {
    dispatch(toggleChat(true));
  }

  function copyRoomCode() {
    navigator.clipboard.writeText(id);
    toast.success(
      "O código da sala foi copiado para sua área de transferência!"
    );
  }

  function setVideo() {
    if (videoUrl) {
      RoomService.setUrl(videoUrl);
      setVideoUrl("");
    }
  }

  return (
    <Container>
      <Head>
        <title>{socket?.room?.name}</title>
      </Head>
      <div>
        <VideoSection isOpen={layout.isChatOpen}>
          <header>
            <section>
              <h1>{socket?.room?.name}</h1>
              {!layout.isChatOpen && (
                <button onClick={handleOpenChat}>
                  <BsBoxArrowInUpLeft />
                  abrir chat
                </button>
              )}
            </section>
            <div>
              <div>
                <BsFillPeopleFill />
                <p>
                  Conectados agora:{" "}
                  <strong>{socket?.room?.usersCount ?? 0}</strong>
                </p>
              </div>

              <button onClick={copyRoomCode}>
                <BiCopy />
                COPIAR CÓDIGO DA SALA
              </button>
            </div>
          </header>

          <Video url={videoUrl} />

          <VideoInfos>
            <h2>
              <span>ASSISTINDO AGORA:</span> Banheira de Nutella
            </h2>
            <InputContainer hasValue={!!videoUrl}>
              <label htmlFor="videoUrl">URL do vídeo</label>
              <input
                type="text"
                id="videoUrl"
                value={videoUrl}
                onChange={({ target }) => setVideoUrl(target.value)}
              />
              <button onClick={setVideo}>definir</button>
            </InputContainer>
          </VideoInfos>
        </VideoSection>
        <Chat />
      </div>
    </Container>
  );
}
