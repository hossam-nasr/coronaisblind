import React, { useRef, useCallback } from "react";
import logo from "../../../../assets/img/ciblogo.png";
import wave from "../../../../assets/img/wave.svg";
import Arrow from "../../../../components/Arrow";
import Testimonial from "./components/Testimonial";
import {
  Image,
  Subtitle,
  About,
  Title,
  TestimonialsContainer,
  Column
} from "./styles";

const WelcomeScreen = () => {
  const refTestimonials = useRef(null);

  const smoothSlide = useCallback(() => {
    refTestimonials.current.scrollIntoView({ behavior: "smooth" });
  }, [refTestimonials]);

  return (
    <>
      <Image src={logo} />
      <Subtitle>COLLEGE QUARANTINE EDITION</Subtitle>
      <About>
        <b>Corona is Blind: College Quarantine Edition</b> is a 1-week event
        designed to help college students meet one another while remaining at
        home during the spread of COVID-19. Based on the popular TV series “Love
        is Blind,” the experience consists of a series of phone and video calls
        between college students from all over the world.
      </About>
      <Arrow onClick={_e => smoothSlide()}></Arrow>
      <img src={wave} />
      <Title>Testimonials</Title>
      <TestimonialsContainer ref={refTestimonials}>
        <Column>
          <Testimonial
            name="mostafa"
            text='"Being able to connect with complete strangers that fast and feel that vulnerable."'
          ></Testimonial>
          <Testimonial
            name="mostafa"
            text='"I liked the anonymity of it, I felt like I could be more honest with my partner"'
          ></Testimonial>
        </Column>
        <Column>
          <Testimonial
            name="mostafa"
            text='"A great format, supplementary questions, awesome people, willingness to help out from the organizers "'
          ></Testimonial>
          <Testimonial
            name="mostafa"
            text='"Meeting new people!! I love my friends but I miss interacting with new people every day at school; this was a great way to make it happen"'
          ></Testimonial>
          <Testimonial
            name="mostafa"
            text='"This has been super fun and absolutely a highlight for me during this quarantine."'
          ></Testimonial>
        </Column>
      </TestimonialsContainer>
    </>
  );
};

export default WelcomeScreen;
