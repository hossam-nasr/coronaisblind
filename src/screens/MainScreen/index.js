import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList } from "../../helpers";
import CallsList from "./components/CallsList";
import Testimonial from "./components/Testimonial"
import { Container, Title, Subtitle, CallListContainer, Image, About, Arrow, Testimonials, Column, WhiteBgTitle } from "./styles";
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

  let testimo = null;
  function smoothSlide(e) {
    testimo.scrollIntoView({ behavior: "smooth" });
  }

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
      {!currentUser && <Arrow onClick={((e) => smoothSlide(e))}></Arrow>}
      {!currentUser && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1"
          d="M0,256L60,266.7C120,277,240,299,360,288C480,277,600,235,720,213.3C840,192,960,192,1080,192C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
      }
      {!currentUser && <WhiteBgTitle>Testimonials</WhiteBgTitle>}
      {!currentUser &&
        <Testimonials id="testimo" ref={div => { testimo = div; }}>
          <Column>
            <Testimonial name="mostafa" text='"Being able to connect with complete strangers that fast and feel that vulnerable."'></Testimonial>
            <Testimonial name="mostafa" text='"I liked the anonymity of it, I felt like I could be more honest with my partner"'></Testimonial>
          </Column>
          <Column>
            <Testimonial name="mostafa" text='"A great format, supplementary questions, awesome people, willingness to help out from the organizers "'></Testimonial>
            <Testimonial name="mostafa" text='"Meeting new people!! I love my friends but I miss interacting with new people every day at school; this was a great way to make it happen"'></Testimonial>
            <Testimonial name="mostafa" text='"This has been super fun and absolutely a highlight for me during this quarantine."'></Testimonial>
          </Column>
        </Testimonials>}
    </Container>
  );
};

export default MainScreen;
