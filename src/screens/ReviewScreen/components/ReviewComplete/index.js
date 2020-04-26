import React from "react";
import {
  Container,
  Subtitle,
  ButtonContainer,
  StyledRouterLink,
  Button
} from "./styles";
import { Title } from "./styles";

const ErrorMessage = () => (
  <Container>
    <Title>Thank you!</Title>
    <Subtitle>You have successfully reviewed this call!</Subtitle>
    <ButtonContainer>
      <StyledRouterLink to="/">
        <Button>Go Home</Button>
      </StyledRouterLink>
    </ButtonContainer>
  </Container>
);

export default ErrorMessage;
