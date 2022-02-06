import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container, Loading, ContainerLoading } from "./styles";
import { HeaderPage } from "../../components/Header";
import { useUser } from "../../context/useUser";
import { PostCard } from "../../components/PostCard";
import { api } from "../../services/api";

export function Home() {
  const [conteudo, setPosts] = useState([]);
  const [recive, setRecive] = useState(false);
  const { user, userLocal } = useUser();
  async function GetContent() {
    try {
      const response = await api.get("posts");
      setPosts(response.data);
      setRecive(true);
    } catch (error) {
      console.log(error);
    }
  }
  async function getUser() {
    await userLocal();
    user && toast.success(`Seja Bem Vindo ${user.name}🥳`);
  }
  useEffect(() => {
    document.title = "Home";
    getUser();
    GetContent();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <HeaderPage
        name={user ? user.name : null}
        image={user ? user.picture : null}
      />
      {recive ? (
        conteudo.post.map((element) => (
          <PostCard
            title={element.title}
            content={element.content}
            liked="0"
            unliked="0"
            key={element.id}
            name={element.name}
            date={element.date}
            email={element.email}
          />
        ))
      ) : (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      )}
    </Container>
  );
}
