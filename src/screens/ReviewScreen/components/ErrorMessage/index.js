import React from "react";
import {
  Container,
  Subtitle,
  ButtonContainer,
  Button,
  StyledRouterLink
} from "./styles";
import { Title } from "./styles";

const ErrorMessage = () => (
  <Container>
    <Title>Uh oh...</Title>
    <Subtitle>Looks like something went wrong.</Subtitle>
    <ButtonContainer>
      <StyledRouterLink to="/">
        <Button>Go back..</Button>
      </StyledRouterLink>
    </ButtonContainer>
  </Container>
);

export default ErrorMessage;
