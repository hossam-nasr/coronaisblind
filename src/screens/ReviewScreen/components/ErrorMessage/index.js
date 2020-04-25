import React from "react";
import { Link } from "react-router-dom";
import { Container, Subtitle, ButtonContainer } from "./styles";
import { Title } from "./styles";

const ErrorMessage = () => (
  <Container>
    <Title>Uh oh...</Title>
    <Subtitle>Looks like something went wrong.</Subtitle>
    <ButtonContainer>
      <Link to="/">
        <Subtitle>Go back..</Subtitle>
      </Link>
    </ButtonContainer>
  </Container>
);

export default ErrorMessage;
