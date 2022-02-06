import React from "react";
import GoogleLogin from "react-google-login";

import { Container } from "./styles";
import { useUser } from "../../context/useUser";
import { useLocation, useNavigate } from "react-router-dom";

export function LoginButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userLocal } = useUser();
  function responseGoogle(data) {
    if (data) {
      localStorage.setItem("IcaroNews", data?.tokenId);
      userLocal();
      if (location.pathname === "/") {
        navigate("/home");
      }
    }
  }
  return (
    <Container>
      <GoogleLogin
        clientId="1040441426063-ffepoitc653g6rgf9gmml8hmv3hgimh2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </Container>
  );
}
