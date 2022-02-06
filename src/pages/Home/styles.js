import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--gray-800);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-500);
  }
`;

export const Loading = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid var(--purple-500);
  border-bottom-color: transparent;
  animation: loading 0.8s linear infinite;
  @keyframes loading {
    from {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
