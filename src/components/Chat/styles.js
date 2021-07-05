import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const ChatContainer = styled.section`
  background: ${props => props.theme.colors.gray400};
  width: 28rem;
  height: calc(100% - 4rem);
  position: fixed;
  right: ${props => props.isOpen ? '2rem' : '-100%'};
  transition: 1s;
  top: 2rem;
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media(max-width: 1250px) {
    width: 20rem;
  }

  @media(max-width: 1000px) {
    -webkit-box-shadow: -11px 0px 22px -2px rgba(0,0,0,0.28); 
    box-shadow: -11px 0px 22px -2px rgba(0,0,0,0.28);
  }

  header {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
    }

    button {
      background: ${props => props.theme.colors.primary};
      border: none;
      border-radius: .4rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      padding: .3rem;
      transition: .5s;
      
      svg {
        margin-right: .4rem;
        width: 1rem;
        height: 1rem;
      }

      &:hover {
        background: ${props => lighten(0.15, props.theme.colors.primary)};
      }
    }
  }
`;

export const MessagesContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  flex-direction: column;
  gap: 1rem;
  padding-right: 1rem;
`;

export const MessageContent = styled.div`
  align-self: ${props => props.isMe ? 'flex-end' : 'flex-start'};
  strong {
    font-weight: 500;
    font-size: 1rem;
    display: block;
    margin-bottom: .5rem;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    padding: .8rem;
    background: ${props => props.theme.colors.message};
    border-radius: .8rem .8rem .8rem 0;

    ${props => props.isMe && css`
      background: ${props.theme.colors.myMessage};
      border-radius: .8rem .8rem 0 .8rem;
    `}
  }
`;

export const MessageInput = styled.div`
  width: 100%;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  height: 3rem;
  margin-top: auto;

  input {
    height: 100%;
    width: 100%;
    border: none;
    padding: 1rem;
    background: ${props => props.theme.colors.gray100};
    border-radius: .7rem 0 0 .7rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 3rem;
    height: 100%;
    border-radius: 0 .7rem .7rem 0;
    background: ${props => props.theme.colors.primary};
    transition: .5s;

    &:hover {
      background: ${props => lighten(0.15, props.theme.colors.primary)};
    }
  }
`;