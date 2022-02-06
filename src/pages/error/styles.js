import styled from "styled-components";
import { GrReactjs } from "react-icons/gr";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  div {
    color: var(--gray-300);
    text-align: center;
    display: flex;
    flex-direction: column;
    strong {
      font-size: 20px;
    }
    button {
      width: 150px;
      display: block;
      margin: 20px auto;
      padding: 10px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--blue-300);
      color: var(--white);
      font-weight: bold;

      &:hover {
        background-color: transparent;
        color: var(--blue-300);
        box-shadow: 0 0 0 2px var(--blue-300);
        transition: 0.3s;
      }
    }
  }
`;

export const ReactAnimation = styled(GrReactjs)`
  color: var(--gray-300);
  width: 100px;
  height: 100px;
  animation: ReactAnimation 3s linear infinite;
  @keyframes ReactAnimation {
    to {
      transform: rotate(360deg);
    }
  }
`;
