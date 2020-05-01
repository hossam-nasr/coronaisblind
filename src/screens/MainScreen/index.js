import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList } from "../../helpers";
import CallsList from "./components/CallsList";
import Testimonial from "./components/Testimonial"
import { Container, Title, Subtitle, CallListContainer, Image, About, Testimonials, Column, WhiteBgTitle } from "./styles";
import logo from "../../assets/img/ciblogo.png"
import { Arrow } from "../../components/RootContainer"
import wave from "../../assets/img/wave.svg"

const MainScreen = () => {
  const { currentUser } = useContext(UserContext);

  const [callList, setCallList] = useState([]);
  const [testimonialState, setTestimonialState] = useState(null);

  useEffect(() => {
    const getCalls = async () => {
      const calls = await getCallList(currentUser);
      setCallList(calls);
    };

    getCalls();
  }, [currentUser]);

  const smoothSlide = (e) => {
    testimonialState.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Container>
      {currentUser ?
        (
          <>
            <Title>{`Hey, ${currentUser.firstName}!`}</Title>
            <Subtitle>Welcome to Corona is Blind Season 3 Episode 2</Subtitle>
            <Subtitle>This week on Corona is Blind...</Subtitle>
            <CallListContainer>
              <CallsList callList={callList} />
            </CallListContainer>
          </>
        ) :
        (
          <>
            <Image src={logo} />
            <Subtitle>COLLEGE QUARANTINE EDITION</Subtitle>
            <About>Corona is Blind: College Quarantine Edition is a 1-week event designed to help college students meet one another while remaining at home during the spread of COVID-19. Based on the popular TV series “Love is Blind,” the experience consists of a series of phone and video calls between college students from all over the nation.</About>
            <Arrow onClick={((e) => smoothSlide(e))}></Arrow>
            <img src={wave} />
            <WhiteBgTitle>Testimonials</WhiteBgTitle>
            <Testimonials id="testimo" ref={div => { setTestimonialState(div); }}>
              <Column>
                <Testimonial name="mostafa" text='"Being able to connect with complete strangers that fast and feel that vulnerable."'></Testimonial>
                <Testimonial name="mostafa" text='"I liked the anonymity of it, I felt like I could be more honest with my partner"'></Testimonial>
              </Column>
              <Column>
                <Testimonial name="mostafa" text='"A great format, supplementary questions, awesome people, willingness to help out from the organizers "'></Testimonial>
                <Testimonial name="mostafa" text='"Meeting new people!! I love my friends but I miss interacting with new people every day at school; this was a great way to make it happen"'></Testimonial>
                <Testimonial name="mostafa" text='"This has been super fun and absolutely a highlight for me during this quarantine."'></Testimonial>
              </Column>
            </Testimonials>
          </>
        )
      }
    </Container>
  );
};

export default MainScreen;
