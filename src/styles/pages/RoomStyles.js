import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  > div {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    gap: 2rem
  }
`;

export const VideoSection = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 2rem;

  header {
    margin-bottom:3rem;

    h1 {
      font-size: 2.5rem;
      border-bottom: 1px solid ${props => props.theme.colors.border};
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      
      > div {
        display: flex;
        align-items: center;

        svg {
          width: 2rem;
          height: 2rem;
          margin-right: 1rem;
          color: ${props => props.theme.colors.primary};
        }

        p {
          font-weight: 300;
          font-size: 1.2rem;

          strong {
            color: ${props => props.theme.colors.primary};
          }
        }
      }

      button {
        background:${props => props.theme.colors.primary};
        font-weight: 500;
        font-size: 1rem;
        border: none;
        border-radius: .5rem;
        padding: .8rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .5s;

        svg {
          margin-right: .5rem;
        }

        &:hover {
          background: ${props => lighten(0.15, props.theme.colors.primary)};
        }
      }
    }
  }
`;

export const InputContainer = styled.div`
  width: 27rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;

  input {
    background: ${props => props.theme.colors.gray500};
    border-radius: .7rem 0 0 .7rem;
    border: 1px solid ${props => props.hasValue ? props.theme.colors.primary : props.theme.colors.gray200};
    width: 27rem;
    height: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.hasValue ? props.theme.colors.primary : props.theme.colors.gray200};
    
    transition: .5s;


    &::placeholder {
      font-weight: 300;
      color:  ${props => props.theme.colors.gray200};
    }
  }

  button {
    border-radius: 0 .7rem .7rem 0;
    transition: .5s;
    text-transform: uppercase;
    height: 100%;
    font-size: 1.2rem;
    padding: 0 1rem;
    background: ${props => props.hasValue ? props.theme.colors.primary : props.theme.colors.gray200};
    border: 1px solid ${props => props.hasValue ? props.theme.colors.primary : props.theme.colors.gray200};
  }

  label { 
    font-weight: 300;
    font-size: 1.2rem;
    position: absolute;
    color: ${props => props.hasValue ? props.theme.colors.primary : props.theme.colors.gray200};
    left: 1rem;
    bottom: 15px;
    transition: 0.5s;
    pointer-events: none;
    
    ${props => props.hasValue && css`
      transform: translateY(-45px);
      left: 0;
    `}
  }
`;

export const VideoInfos = styled.section`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    span {
      font-weight: 500;
      color:  ${props => props.theme.colors.primary};
    }
  }
`;