import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

import { SiGooglenews } from "react-icons/si";
import { RiAddCircleFill } from "react-icons/ri";

import { Container, ContainerProfile, ButtonNewPost } from "./styles";
import { useUser } from "../../context/useUser";

export function HeaderPage({ name, image }) {
  const { user, userLocal, setOpenModal } = useUser();
  const navigate = useNavigate();

  function responseGoogle(data) {
    if (data) {
      localStorage.setItem("IcaroNews", data?.tokenId);
      userLocal();
    }
  }

  return (
    <Container>
      <div className="ContainerTitle">
        <SiGooglenews />
        <h1>Programing News</h1>
        {user ? (
          <ButtonNewPost onClick={() => navigate("/newpost")}>
            <RiAddCircleFill />
            <strong>New Post</strong>
          </ButtonNewPost>
        ) : null}
      </div>
      {name && image ? (
        <ContainerProfile onClick={() => setOpenModal(true)}>
          <div className="imageContainer">
            <img src={image} alt={name} />
          </div>
          <div>
            <strong>{name}</strong>
          </div>
        </ContainerProfile>
      ) : (
        <GoogleLogin
          clientId="1040441426063-ffepoitc653g6rgf9gmml8hmv3hgimh2.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      )}
    </Container>
  );
}
/*
   <div>
        <ImHackernews />
        <h1>Programing News</h1>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <strong>{name}</strong>
      </div>
*/
