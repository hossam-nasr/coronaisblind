import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList } from "../../helpers";
import CallsList from "./components/CallsList";
import { Container, Title, Subtitle, CallListContainer } from "./styles";

const MainScreen = () => {
  const { currentUser } = useContext(UserContext);

  const [callList, setCallList] = useState([]);

  useEffect(() => {
    const getCalls = async () => {
      const calls = await getCallList(currentUser);
      setCallList(calls);
    };

    getCalls();
  }, [currentUser]);

  return (
    <Container>
      {currentUser && <Title>{`Hey, ${currentUser.firstName}!`}</Title>}
      <Subtitle>Welcome to Corona is Blind Season 3 Episode 2</Subtitle>
      <Subtitle>This week on Corona is Blind...</Subtitle>
      {currentUser && (
        <CallListContainer>
          <CallsList callList={callList} />
        </CallListContainer>
      )}
    </Container>
  );
};

export default MainScreen;
