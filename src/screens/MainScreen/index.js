import React from "react";
import { Container, Title, Subtitle, Button, ButtonContainer } from "./styles";

const MainScreen = () => (
  <Container>
    <Title>Welcome to Corona Is Blind!</Title>
    <Subtitle>We are currently in Week 3!</Subtitle>
    <ButtonContainer>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </ButtonContainer>
  </Container>
);

export default MainScreen;
