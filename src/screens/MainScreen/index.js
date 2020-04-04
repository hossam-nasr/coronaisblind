import React, { useContext } from "react";
import { AuthContext } from "../../Auth.js";
import { Container, Title, Subtitle, ButtonContainer } from "./styles";
import app from "../../firebase";

const MainScreen = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Container>
      <Title>Welcome to Corona Is Blind!</Title>
      <Subtitle>We are currently in Week 3!</Subtitle>
      {currentUser && <Subtitle>{`Welcome, ${currentUser.email}`}</Subtitle>}
      <ButtonContainer>
        {currentUser && (
          <button onClick={() => app.auth().signOut()}>Sign Out</button>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default MainScreen;
