import React from "react";
import { Container, Title, Subtitle, ButtonContainer } from "./styles";
import app from "../../firebase"
// import { Link } from "react-router-dom";

const MainScreen = () => (
  <Container>
    <Title>Welcome to Corona Is Blind!</Title>
    <Subtitle>We are currently in Week 3!</Subtitle>
    <ButtonContainer>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </ButtonContainer>
  </Container>
);

export default MainScreen;
