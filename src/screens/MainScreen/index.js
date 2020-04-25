import React, { useContext } from "react";
import { UserContext } from "../../Auth.js";
import { Container, Title, Subtitle } from "./styles";

const MainScreen = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <Title>Welcome to Corona Is Blind!</Title>
      <Subtitle>We are currently in Week 3!</Subtitle>
      {currentUser && (
        <Subtitle>{`Welcome, ${currentUser.firstName}`}</Subtitle>
      )}
    </Container>
  );
};

export default MainScreen;
