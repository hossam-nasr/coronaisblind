import React from "react";
import CallsList from "./components/CallsList";
import { Title, Subtitle, CallListContainer } from "./styles";

const CallsScreen = ({ callList, name }) => (
  <>
    <Title>{`Hey, ${name}!`}</Title>
    <Subtitle>Welcome to Corona is Blind Season 3 Episode 2</Subtitle>
    <Subtitle>This week on Corona is Blind...</Subtitle>
    <CallListContainer>
      <CallsList callList={callList} />
    </CallListContainer>{" "}
  </>
);

export default CallsScreen;
