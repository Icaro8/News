import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import * as yup from "yup";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { api } from "../../services/api";
import { Container, Form, Row, Button, ContainerLeft } from "./styles";

const schemaPost = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

export function NewPost() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    async function validadeRoute() {
      const user = localStorage.getItem("IcaroNews");
      if (!user) navigate("/home");
      const decode = await jwt_decode(user);
      setUser(decode);
    }
    validadeRoute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);
  async function handleNewPost(data) {
    schemaPost.isValid(data).then((data) => {
      if (!data) {
        toast.error("Os campos são obrigatórios 🤭");
      }
    });
    const post = {
      title: data.title,
      content: data.content,
      name: user.name,
      email: user.email,
    };

    const response = await api.post("posts", post);
    if (response.status === 201) {
      toast.success("Post criado com sucesso 🥳");
      reset();
    }
    console.log(response);
  }

  return (
    <Container>
      <ContainerLeft>
        <BsFillArrowLeftCircleFill onClick={() => navigate("/home")} />
      </ContainerLeft>
      <Form>
        <form onSubmit={handleSubmit(handleNewPost)}>
          <Row>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              {...register("title")}
              id="title"
              placeholder="Titulo do Post"
            />
          </Row>
          <Row>
            <label htmlFor="content">Post</label>
            <textarea
              {...register("content")}
              id="content"
              cols="60"
              rows="15"
              placeholder="Conteudo"
            ></textarea>
          </Row>
          <Button>
            <input type="submit" value="Submit" />
          </Button>
        </form>
      </Form>
    </Container>
  );
}
