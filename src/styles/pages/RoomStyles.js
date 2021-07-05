import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > div {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
  }
`;

export const VideoSection = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  transition: 1s;
  margin-right: ${props => props.isOpen ? '29.5rem' : '0'};

  @media(max-width: 1250px) {
    margin-right: ${props => props.isOpen ? '22rem' : '0'};
  }

  @media(max-width: 1000px) {
    overflow-y: initial;
    margin-right: 0;
  }

  header {
    margin-bottom:3rem;

    > section {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${props => props.theme.colors.border};
      padding-bottom: 2rem;
      margin-bottom: 2rem;
      h1 {
        font-size: 2.5rem;
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
        animation: showFade .5s ease-in-out forwards;
        
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

    @media(max-width: 1250px) {
      > section {
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
        h1 {
          font-size: 1.5rem;
        }
        button {
          border-radius: .4rem;
          padding: .3rem;
          svg {
            margin-right: .4rem;
            width: 1rem;
            height: 1rem;
          }
        }
      }

      > div {
        > div {
          svg {
            width: 1.2rem;
            height: 1.2rem;
          }
          p {
            font-size: 1rem;
            strong {
              color: ${props => props.theme.colors.primary};
            }
          }
        }

        button {
          font-size: .8rem;
          border-radius: .5rem;
          padding: .5rem;
        }
      }
    }

    @media(max-width: 600px) {
      > section {
        h1 {
          font-size: 1.2rem;
        }
      }

      > div {
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        > div {
          svg {
            width: 1.2rem;
            height: 1.2rem;
          }
          p {
            font-size: 1rem;
            strong {
              color: ${props => props.theme.colors.primary};
            }
          }
        }

        button {
          font-size: .8rem;
          border-radius: .5rem;
          padding: .5rem;
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
    span {
      font-weight: 500;
      color:  ${props => props.theme.colors.primary};
    }
  }
`;