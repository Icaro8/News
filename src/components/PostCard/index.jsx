import React from "react";
import { IntlDate } from "../../util/formateDate";

import {
  Container,
  LikedButton,
  UnLikedButton,
  Header,
  Paragraph,
  ContainerIcons,
  Title,
  ContainerUser,
} from "./styles";

export function PostCard({
  title,
  content,
  liked,
  unliked,
  name,
  date,
  email,
}) {
  return (
    <Container>
      <Header>
        <div className="image"></div>
        <div className="Name">
          <ContainerUser>
            <strong>{name}</strong>
            <span>{email}</span>
          </ContainerUser>
          <span>{date}</span>
        </div>
      </Header>
      <div>
        <Title>{title}</Title>
      </div>
      <Paragraph>{content}</Paragraph>
      <ContainerIcons>
        <strong>
          <LikedButton />
          {liked}
        </strong>
        <strong>
          <UnLikedButton />
          {unliked}
        </strong>
      </ContainerIcons>
    </Container>
  );
}
