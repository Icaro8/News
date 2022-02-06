import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Container = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100vh;
`;
export const ContainerContent = styled.div`
  padding: 50px;
  background-color: var(--gray-200);
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Close = styled(FiX)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  transition: filter 0.3s;

  &:hover {
    background-color: var(--gray-400);
    border-radius: 50%;
  }
`;

export const ArrowDown = styled(AiOutlineArrowDown)`
  width: 30px;
  height: 30px;
`;
