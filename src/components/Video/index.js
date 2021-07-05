import { VideoContainer } from './styles';
import ReactPlayer from 'react-player'

export default function Video({ url }) {
  return (
    <VideoContainer>
      {url ? <ReactPlayer url={url} /> : <strong>Aguardando um vídeo para a sala</strong>}
    </VideoContainer>
  )
}