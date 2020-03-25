import React from "react";
import { Container, Title, Subtitle, Button, ButtonContainer } from "./styles";
import { Link } from "react-router-dom";

const MainScreen = () => (
  <Container>
    <Title>Welcome to Corona Is Blind!</Title>
    <Subtitle>We are currently in Week 3!</Subtitle>
    <ButtonContainer>
      <Button>Sign In</Button>
      <Link to="/signup">
        <Button>Sign Up</Button>
      </Link>
    </ButtonContainer>
  </Container>
);

export default MainScreen;
