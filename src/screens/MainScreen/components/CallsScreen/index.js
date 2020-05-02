import React from "react";
import CallsList from "./components/CallsList";
import {
  Title,
  Subtitle,
  CallListContainer,
  SubSubTitle,
  MidContainer
} from "./styles";

const CallsScreen = ({ callList, revealList, name }) => (
  <>
    <Title>{`Hey, ${name}!`}</Title>
    <Subtitle>Welcome to Corona is Blind Season 3 Episode 2</Subtitle>
    <SubSubTitle>This week on Corona is Blind...</SubSubTitle>
    {callList && callList.length > 0 ? (
      <CallListContainer>
        <CallsList callList={callList} revealList={revealList} />
      </CallListContainer>
    ) : (
      <MidContainer>
        <Subtitle>You currently don't have any calls. Stay tuned!</Subtitle>
      </MidContainer>
    )}
  </>
);

export default CallsScreen;
