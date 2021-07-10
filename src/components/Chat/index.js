import Message from "./Message";
import { ChatContainer, MessagesContainer, MessageInput } from "./styles";
import { FiSend } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { toggleChat } from "../../actions";
import { IoMdExit } from "react-icons/io";
import RoomService from "../../services/RoomService";

export default function Chat() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { dispatch } = store;

  const { layout, socket } = useSelector((state) => state);

  const hub = socket?.socket;
  const room = socket?.room;

  useEffect(() => {
    hub?.on("msg", (data) => {
      setMessages((prev) => [...prev, data]);
      document.getElementById("messages").scrollTop =
        document.getElementById("messages").scrollHeight;
      dispatch(toggleChat(true));
    });
    return () => {
      hub?.off("msg");
    };
  }, []);

  function handleSendMessage(e) {
    e.preventDefault();
    if (currentMessage != null && currentMessage.trim().length > 0) {
      RoomService.sendMessage(room.id, currentMessage);
      setCurrentMessage("");
    }
  }

  function handleCloseChat() {
    dispatch(toggleChat(false));
  }

  return (
    <ChatContainer isOpen={layout.isChatOpen}>
      <header>
        <strong>Chat da sala</strong>
        <button onClick={handleCloseChat}>
          <IoMdExit />
          esconder chat
        </button>
      </header>

      <MessagesContainer id="messages">
        {messages.map((message, index) => (
          <Message
            key={index}
            username={message.username}
            message={message.text}
            isMe={hub?.id == message.userId}
          />
        ))}
      </MessagesContainer>

      <MessageInput onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Sua mensagem..."
          value={currentMessage}
          onChange={({ target }) => setCurrentMessage(target.value)}
        />
        <button type="submit">
          <FiSend />
        </button>
      </MessageInput>
    </ChatContainer>
  );
}
