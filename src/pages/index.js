import { Container, Content, FormContent, InputContainer } from '../styles/pages/HomeStyles';
import Logo from '../assets/logo.svg';
import Illustration from '../assets/illustration.svg';
import { useState } from 'react';

export default function Home() {
  const [formType, setFormType] = useState('join');

  const [nickname, setNickname] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <Container>
      <Logo />

      <Content>
        <h1>Assista vídeos do Youtube <span>simultaneamente</span> de forma <span>fácil e pratica!</span></h1>

        <div>
          <FormContent>
            {formType === 'join' ? (
              <>
                <h2>entrar em uma sala existente</h2>

                <InputContainer hasValue={!!nickname}>
                  <label htmlFor="nickname">Escolha seu nick</label>
                  <input type="text" id="nickname" onChange={({ target }) => setNickname(target.value)} />
                </InputContainer>
                <InputContainer hasValue={!!roomCode}>
                  <label htmlFor="roomCode">Código da sala</label>
                  <input type="text" id="roomCode" onChange={({ target }) => setRoomCode(target.value)} />
                </InputContainer>

                <button>Entrar</button>
                <p>Ou crie a sua <b onClick={() => setFormType('create')}>clicando aqui</b></p>
              </>
            ) : (
              <>
                <h2>Criar nova sala</h2>

                <InputContainer hasValue={!!nickname}>
                  <label htmlFor="nickname">Escolha seu nick</label>
                  <input type="text" id="nickname" onChange={({ target }) => setNickname(target.value)} />
                </InputContainer>
                <InputContainer hasValue={!!videoUrl}>
                  <label htmlFor="roomCode">URL do vídeo</label>
                  <input type="text" id="roomCode" onChange={({ target }) => setVideoUrl(target.value)} />
                </InputContainer>

                <button>Criar</button>
                <p>Ou entre em uma existente <b onClick={() => setFormType('join')}>clicando aqui</b></p>
              </>
            )}
          </FormContent>
          <Illustration />
        </div>
      </Content>
    </Container>
  )
}
