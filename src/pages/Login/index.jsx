import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SiGooglenews } from "react-icons/si";

import { LoginButton } from "../../components/LoginButton";
import { Container, ArrowRight, Button } from "./styles";
import { useUser } from "../../context/useUser";

export function LoginPage() {
  const { user } = useUser();
  const navigate = useNavigate();
  function handleClick() {
    toast.warn("Sua imersão será limitada 😢 ");
    navigate("/home");
  }

  return (
    <Container>
      <h1>
        <SiGooglenews />
        Programing News
      </h1>
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
