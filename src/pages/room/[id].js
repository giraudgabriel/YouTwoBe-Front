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
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=5qap5aO4i9A"
  );
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    "https://www.youtube.com/watch?v=5qap5aO4i9A"
  );

  const { dispatch } = store;

  function setVideo() {
    setCurrentVideoUrl(setVideoUrl);
  }

  const { layout, socket } = useSelector((state) => state);

  const hub = socket?.socket;

  useEffect(() => {
    if (id == undefined && socket.room == undefined) {
      router.push("/");
    } else {
      RoomService.joinRoom("Usuário", id);
    }
    hub?.on("msg", (data) => {
      console.log(data);
    });
    return () => {
      hub?.off("msg");
      dispatch(setRoom(undefined));
    };
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

          <Video url={currentVideoUrl} />

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
