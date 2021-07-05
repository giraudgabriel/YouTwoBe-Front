import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 20rem;
  flex-direction: column;

  > svg {
    margin-bottom: 4rem;
  }
`;

export const Content = styled.main`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.theme.colors.gray900};
  border-radius:2rem;
  width: 100%;
  padding: 2rem 3.5rem;

  > h1 {
    font-size: 2.5rem;
    text-align: left;
    align-self: flex-start;
    font-weight: 500;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    width: 100%;

    span {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    grid-gap: 2rem;
  }
`;

export const FormContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

  h2 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  button {
    width: 100%;
    padding: 1rem;
    height: 3.5rem;
    background: ${props => props.theme.colors.primary};
    border:none;
    font-weight: 500;
    border-radius: .7rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    transition: .5s;

    &:hover {
      background: ${props => lighten(0.15, props.theme.colors.primary)};
    }
  }

  p {
    align-self: flex-start;
    margin-top: 1rem;
    font-weight: 300;

    b {
      color: ${props => props.theme.colors.primary};
      cursor: pointer;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 2.5rem;

  & + & {
    margin-top: 3.5rem;
  }

  input {
    background: ${props => props.theme.colors.gray500};
    border-radius: .7rem;
    border: 1px solid ${props => props.hasValue ? props.theme.colors.primary : props.theme.colors.gray200};
    width: 100%;
    padding: 1rem;
    height: 3.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${props => props.hasValue ? props.theme.colors.primary : props.theme.colors.gray200};
    
    transition: .5s;


    &::placeholder {
      font-weight: 300;
      color:  ${props => props.theme.colors.gray200};
    }
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