import { VideoContainer } from './styles';
import ReactPlayer from 'react-player'

export default function Video({ url }) {
  return (
    <VideoContainer>
      <ReactPlayer url={url} />
    </VideoContainer>
  )
}