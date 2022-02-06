import React, { useEffect } from "react";

import { Container } from "./styles";
import { HeaderPage } from "../../components/Header";
import { useUser } from "../../context/useUser";

export function Home() {
  const { user, userLocal } = useUser();
  useEffect(() => {
    document.title = "Home";
    async function UserPage() {
      await userLocal();
    }
    UserPage();
  }, []);
  console.log(user);
  return (
    <Container>
      <HeaderPage
        name={user ? user.name : null}
        image={user ? user.picture : null}
      />
      <h1>Hello world</h1>
    </Container>
  );
}
