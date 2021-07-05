import { MessageContent } from './styles';

export default function Message({ username, message, isMe = false }) {
  return (
    <MessageContent isMe={isMe}>
      <strong>{isMe ? 'Você' : username}</strong>
      <p>{message}</p>
    </MessageContent>
  )
}