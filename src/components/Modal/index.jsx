import React from "react";

import { ButtonSignOut } from "../SignOut";
import { Container, ContainerContent, Close, ArrowDown } from "./styles";
import { useUser } from "../../context/useUser";

export function Modal({ isOpen }) {
  const { setOpenModal, openModal } = useUser();
  return (
    <Container
      style={{
        display: openModal ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ContainerContent>
        <Close onClick={() => setOpenModal(false)} />
        <h2>Clique para Sair </h2>
        <ArrowDown />
        <ButtonSignOut />
      </ContainerContent>
    </Container>
  );
}
