import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  .ContainerTitle {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      width: 30px;
      height: 30px;
      color: var(--gray-200);
    }
    h1 {
      font-family: "Indie Flower", cursive;
      color: var(--gray-200);
    }
  }
  border-bottom: 1px solid var(--gray-100);
`;
export const ContainerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: var(--gray-600);
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  transition: filter;
  &:hover {
    filter: brightness(0.8);
  }
  .imageContainer {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
  div {
    strong {
      font-size: 16px;
      color: var(--gray-200);
    }
  }
`;

export const ButtonNewPost = styled.button`
  padding: 5px;
  border: none;
  border-radius: 10px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-600);
  color: var(--gray-400);
  gap: 5px;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(1.5);
  }
`;
