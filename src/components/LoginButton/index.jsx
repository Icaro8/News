import React from "react";
import GoogleLogin from "react-google-login";

import { Container } from "./styles";
import { useUser } from "../../context/useUser";

export function LoginButton() {
  const { userLocal } = useUser();
  function responseGoogle(data) {
    if (data) {
      localStorage.setItem("IcaroNews", data?.tokenId);
      userLocal();
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
