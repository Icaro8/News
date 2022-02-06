import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--gray-800);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  label {
    font-size: 20px;
    color: var(--gray-600);
    padding: 5px 5px;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 5px 5px;
    border: none;
    background-color: var(--gray-500);
    border-radius: 5px;
    font-size: 20px;
    color: var(--gray-300);
    outline: none;
    &::placeholder {
      font-size: 20px;
      color: var(--gray-300);
      text-align: center;
    }
    &:focus {
      box-shadow: 0 0 2px 2px var(--blue-400);
    }
  }
  textarea {
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: var(--gray-500);
    padding: 10px 5px;
    font-size: 16px;
    color: var(--gray-300);
    &::placeholder {
      font-size: 20px;
      color: var(--gray-300);
      text-align: center;
    }
    &:focus {
      box-shadow: 0 0 2px 2px var(--blue-400);
    }
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  input {
    width: 300px;
    height: 35px;
    cursor: pointer;
    border: none;
    background-color: var(--blue-400);
    color: var(--white);
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
      background-color: transparent;
      box-shadow: 0 0 0 2px var(--blue-400);
      color: var(--blue-400);
      transition: linear 0.2s;
    }
  }
`;

export const ContainerLeft = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  svg {
    width: 30px;
    height: 30px;
    color: var(--gray-600);
    cursor: pointer;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(1.3);
    }
  }
`;
