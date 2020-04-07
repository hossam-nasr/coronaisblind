import React, { useContext } from "react";
import { AuthContext } from "../../Auth.js";
import { Container, Title, Subtitle } from "./styles";

const MainScreen = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Container>
      <Title>Welcome to Corona Is Blind!</Title>
      <Subtitle>We are currently in Week 3!</Subtitle>
      {currentUser && <Subtitle>{`Welcome, ${currentUser.email}`}</Subtitle>}
    </Container>
  );
};

export default MainScreen;
