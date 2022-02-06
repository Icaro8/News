import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Container, ReactAnimation } from "./styles";

export function ErrorPage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/home");
  }

  return (
    <Container>
      <ReactAnimation />
      <div>
        <h1>Desculpe 😥</h1>
        <strong>
          Infelizmente não encontramos <br /> oque estava buscando
        </strong>
        <button onClick={handleNavigate}>
          <AiOutlineArrowLeft />
          Voltar
        </button>
      </div>
    </Container>
  );
}
