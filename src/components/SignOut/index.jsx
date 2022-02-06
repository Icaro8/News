import React from "react";
import GoogleLogout from "react-google-login";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { useUser } from "../../context/useUser";
export function ButtonSignOut() {
  const { setOpenModal } = useUser();
  const navigate = useNavigate();
  function responseGoogle() {
    navigate("/home");
    localStorage.removeItem("IcaroNews");
    setOpenModal(false);
    window.location.reload();
  }
  return (
    <Container>
      <GoogleLogout
        clientId="1040441426063-ffepoitc653g6rgf9gmml8hmv3hgimh2.apps.googleusercontent.com"
        buttonText="Logout"
        onSuccess={responseGoogle}
      />
    </Container>
  );
}
