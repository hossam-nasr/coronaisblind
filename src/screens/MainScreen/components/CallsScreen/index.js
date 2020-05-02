import React from "react";
import CallsList from "./components/CallsList";
import { Title, Subtitle, CallListContainer, SubSubTitle } from "./styles";

const CallsScreen = ({ callList, name }) => (
  <>
    <Title>{`Hey, ${name}!`}</Title>
    <Subtitle>Welcome to Corona is Blind Season 3 Episode 2</Subtitle>
    <SubSubTitle>This week on Corona is Blind...</SubSubTitle>
    <CallListContainer>
      <CallsList callList={callList} />
    </CallListContainer>
  </>
);

export default CallsScreen;
