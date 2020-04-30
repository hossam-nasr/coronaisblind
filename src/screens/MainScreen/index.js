import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList } from "../../helpers";
import CallsList from "./components/CallsList";
import { Container, Title, Subtitle, CallListContainer, Image } from "./styles";
import logo from "../../assets/img/ciblogo.png"

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
      {currentUser && <Subtitle>Welcome to Corona is Blind Season 3 Episode 2</Subtitle>}
      {currentUser && <Subtitle>This week on Corona is Blind...</Subtitle>}
      {currentUser &&
        <CallListContainer>
          <CallsList callList={callList} />
        </CallListContainer>
      }
      {!currentUser && <Image src={logo} />}
    </Container>
  );
};

export default MainScreen;
