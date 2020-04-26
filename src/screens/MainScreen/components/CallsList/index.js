import React from "react";
import CallRow from "./components/CallRow";
import { Container, Title, CallsContainer } from "./styles";

const CallsList = ({ callList }) => {
  /* TODO: EDIT THIS WITH PROPER TIMESTAMP LOGIC ONCE WE IMPLEMENT TIMESTAMPS */
  const upcomingCalls = callList.filter(call => call.time === "7:00pm EDT");
  const pastCalls = callList.filter(call => call.time !== "7:00pm EDT");

  return (
    <Container>
      <Title>Upcoming Calls</Title>
      <CallsContainer>
        {upcomingCalls.map(({ time, name, id, url }) => (
          <CallRow
            key={id}
            id={id}
            time={time}
            name={name}
            url={url}
            past={false}
          />
        ))}
      </CallsContainer>
      <Title>Previous Calls</Title>
      <CallsContainer>
        {pastCalls.map(({ id, time, name }) => (
          <CallRow key={id} time={time} name={name} id={id} past />
        ))}
      </CallsContainer>
    </Container>
  );
};

export default CallsList;
