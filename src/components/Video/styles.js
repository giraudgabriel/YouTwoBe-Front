import styled from 'styled-components';

export const VideoContainer = styled.section`
  background: #1F1F1F;
  width: 100%;
  height: 33rem;
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #7d7d7d;
  }

  > div {
    width: 100% !important;
    height: 33rem !important;

    animation: fade .5s ease-in-out forwards;
  }
`;