import styled from "styled-components";

import { AiOutlineArrowRight } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--gray-800);
  color: var(--gray-50);
  h1 {
    font-family: "Indie Flower", cursive;
    font-size: 50px;
  }
  div {
    display: flex;
    gap: 20px;
  }
`;

export const ArrowRight = styled(AiOutlineArrowRight)`
  width: 30px;
  height: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--gray-500);
  color: var(--gray-100);
  transition: filter 0.4s;
  &:hover {
    filter: brightness(0.8);
  }
`;
