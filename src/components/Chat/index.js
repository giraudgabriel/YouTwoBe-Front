import Message from './Message';
import { ChatContainer, MessagesContainer, MessageInput } from './styles';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';

export default function Chat() {
  const [currentMessage, setCurrentMessage] = useState();

  function handleSendMessage() {
    console.log(currentMessage)
  }

  return (
    <ChatContainer>
      <header>
        <strong>Chat da sala</strong>
      </header>

      <MessagesContainer>
        <Message username="Gabriel" message="Lorem Ipsum is simply dummy text of the printing and typesetting 😁" />
        <Message isMe username="Gabriel" message="Lorem Ipsum is simply 😁" />
        <Message username="Gabriel" message="Lorem Ipsum is simply dummy text of the printing and typesetting 😁" />
        <Message isMe username="Gabriel" message="Lorem Ipsum is simply 😁" />
      </MessagesContainer>

      <MessageInput>
        <input type="text" placeholder="Sua mensagem..." value={currentMessage} onChange={({ target }) => setCurrentMessage(target.value)} />
        <button onClick={handleSendMessage}>
          <FiSend />
        </button>
      </MessageInput>
    </ChatContainer>
  )
}