import {
  Container,
  Content,
  FormContent,
  InputContainer,
} from "../styles/pages/HomeStyles";
import Logo from "../assets/logo.svg";
import Illustration from "../assets/illustration.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { socket } = useSelector((state) => state.socket);

  const [formType, setFormType] = useState("join");

  const [nickname, setNickname] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    if (nickname && roomCode)
      socket?.emit("createRoom", { name: nickname, roomName: roomCode });
  };

  const handleJoinRoom = async (e) => {
    e.preventDefault();
    if (nickname && roomCode)
      socket?.emit("joinRoom", { name: nickname, roomName: roomCode });
  };

  return (
    <Container>
      <Logo />

      <Content>
        <h1>
          Assista vídeos do Youtube <span>simultaneamente</span> de forma{" "}
          <span>fácil e pratica!</span>
        </h1>

        <div>
          <FormContent>
            {formType === "join" ? (
              <>
                <h2>entrar em uma sala existente</h2>

                <InputContainer hasValue={!!nickname}>
                  <label htmlFor="nickname">Escolha seu nick</label>
                  <input
                    type="text"
                    id="nickname"
                    onChange={({ target }) => setNickname(target.value)}
                  />
                </InputContainer>
                <InputContainer hasValue={!!roomCode}>
                  <label htmlFor="roomCode">Código da sala</label>
                  <input
                    type="text"
                    id="roomCode"
                    onChange={({ target }) => setRoomCode(target.value)}
                  />
                </InputContainer>

                <button onClick={handleJoinRoom}>Entrar</button>
                <p>
                  Ou crie a sua{" "}
                  <b onClick={() => setFormType("create")}>clicando aqui</b>
                </p>
              </>
            ) : (
              <>
                <h2>Criar nova sala</h2>

                <InputContainer hasValue={!!nickname}>
                  <label htmlFor="nickname">Escolha seu nick</label>
                  <input
                    type="text"
                    id="nickname"
                    onChange={({ target }) => setNickname(target.value)}
                  />
                </InputContainer>
                <InputContainer hasValue={!!roomCode}>
                  <label htmlFor="roomCode">Nome da sala</label>
                  <input
                    type="text"
                    id="roomCode"
                    onChange={({ target }) => setRoomCode(target.value)}
                  />
                </InputContainer>

                <button onClick={handleCreateRoom}>Criar</button>
                <p>
                  Ou entre em uma existente{" "}
                  <b onClick={() => setFormType("join")}>clicando aqui</b>
                </p>
              </>
            )}
          </FormContent>
          <Illustration />
        </div>
      </Content>
    </Container>
  );
}
