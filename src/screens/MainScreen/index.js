import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList } from "../../helpers";
import CallsList from "./components/CallsList";
import { Container, Title, Subtitle, CallListContainer, Image, About, Arrow } from "./styles";
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
      {!currentUser && <Subtitle>COLLEGE QUARANTINE EDITION</Subtitle>}
      {!currentUser && <About>Corona is Blind: College Quarantine Edition is a1-week event designed to help college students meet one another while remaining at home during the spread of COVID-19. Based on the popular TV series “Love is Blind,” the experience consists of a series of phone and video calls between college students from all over the nation.</About>}
      {!currentUser && <Arrow></Arrow>}
    </Container>
  );
};

export default MainScreen;
