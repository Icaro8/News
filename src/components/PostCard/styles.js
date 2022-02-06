import styled from "styled-components";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
export const Container = styled.div`
  width: 500px;
  margin: 20px auto;
  color: var(--gray-400);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid var(--gray-600);
  border-radius: 5px;
  div {
    h1 {
      text-align: center;
      padding: 5px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid var(--gray-300);
  color: var(--gray-400);
  padding: 5px;
  .image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffff;
  }
  .Name {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-grow: 1;
    flex-shrink: 1;
    strong::first-letter {
      text-transform: uppercase;
    }
  }
`;
export const Title = styled.h1`
  &::first-letter {
    text-transform: uppercase;
  }
`;
export const Paragraph = styled.p`
  font-size: 20px;
  color: var(--gray-500);
  padding: 10px 20px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  strong {
    display: flex;
    gap: 5px;
    cursor: pointer;
    transition: filter 0.3s;
    &:hover {
      filter: brightness(0.6);
    }
    svg {
      margin-left: 10px;
    }
  }
`;

export const LikedButton = styled(AiFillLike)``;

export const UnLikedButton = styled(AiFillDislike)``;

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    font-size: 12px;
  }
`;
