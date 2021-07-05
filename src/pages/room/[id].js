import { useRouter } from "next/dist/client/router"
import { Container, VideoSection, InputContainer, VideoInfos } from '../../styles/pages/RoomStyles';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiCopy } from 'react-icons/bi';
import Chat from "../../components/Chat";
import Video from "../../components/Video";
import { useState } from "react";

export default function Room() {
  const router = useRouter();
  const { id } = router.query;
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=5qap5aO4i9A');
  const [currentVideoUrl, setCurrentVideoUrl] = useState('https://www.youtube.com/watch?v=5qap5aO4i9A');

  function setVideo() {
    setCurrentVideoUrl(setVideoUrl)
  }

  return (
    <Container>
      <div>
        <VideoSection>
          <header>
            <h1>Sala pra dar sub pro Gira e assistir filmes</h1>
            <div>
              <div>
                <BsFillPeopleFill />
                <p>Conectados agora: <strong>12</strong></p>
              </div>

              <button>
                <BiCopy />
                COPIAR CÓDIGO DA SALA
              </button>
            </div>
          </header>

          <Video url={currentVideoUrl} />

          <VideoInfos>
            <h2><span>ASSISTINDO AGORA:</span> Banheira de Nutella</h2>
            <InputContainer hasValue={!!videoUrl}>
              <label htmlFor="videoUrl">URL do vídeo</label>
              <input type="text" id="videoUrl" value={videoUrl} onChange={({ target }) => setVideoUrl(target.value)} />
              <button onClick={setVideo}>
                definir
              </button>
            </InputContainer>
          </VideoInfos>
        </VideoSection>
        <Chat />
      </div>
    </Container>
  )
}