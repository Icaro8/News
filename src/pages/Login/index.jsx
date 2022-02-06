import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginButton } from "../../components/LoginButton";
import { Container, ArrowRight, Button } from "./styles";

export function LoginPage() {
  const navigate = useNavigate();
  function handleClick() {
    toast.warn("Sua imersão será limitada 😢 ");
    navigate("/home");
  }

  return (
    <Container>
      <h1>Hello world</h1>
      <div>
        <LoginButton />
        <Button onClick={handleClick}>
          <ArrowRight />
          <strong>Continuar sem conta</strong>
        </Button>
      </div>
    </Container>
  );
}
