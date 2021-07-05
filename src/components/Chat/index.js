import Message from './Message';
import { ChatContainer, MessagesContainer, MessageInput } from './styles';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store';
import { toggleChat } from '../../actions';
import { IoMdExit } from 'react-icons/io';

export default function Chat() {
  const [currentMessage, setCurrentMessage] = useState();

  const { dispatch } = store;

  function handleSendMessage() {
    console.log(currentMessage)
  }

  function handleCloseChat() {
    dispatch(toggleChat(false));
  }

  const { layout } = useSelector((state) => state);
  return (
    <ChatContainer isOpen={layout.isChatOpen}>
      <header>
        <strong>Chat da sala</strong>
        <button onClick={handleCloseChat}>
          <IoMdExit />
          esconder chat
        </button>
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