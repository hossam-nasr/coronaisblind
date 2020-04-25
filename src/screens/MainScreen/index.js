import React, { useContext } from "react";
import { UserContext } from "../../Auth.js";
import CallsList from "./components/CallsList";
import { Container, Title, Subtitle } from "./styles";

const MainScreen = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      {currentUser && <Title>{`Hey, ${currentUser.firstName}!`}</Title>}
      <Subtitle>Welcome to Corona is Blind Season 3 Episode 2</Subtitle>
      <Subtitle>This week on Corona is Blind...</Subtitle>
      {currentUser && <CallsList />}
    </Container>
  );
};

export default MainScreen;
