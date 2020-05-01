import React, { useContext } from "react";
import { SessionContext } from "../../../../Session";
import CallRow from "./components/CallRow";
import { Container, Title, CallsContainer } from "./styles";

const CallsList = ({ callList }) => {
  const { currentSession } = useContext(SessionContext);
  /* TODO: EDIT THIS WITH PROPER TIMESTAMP LOGIC ONCE WE IMPLEMENT TIMESTAMPS */
  const upcomingCalls = callList.filter(
    call =>
      call.session === currentSession.id &&
      call.day === currentSession.activeDay
  );
  const pastCalls = callList.filter(
    call =>
      call.session !== currentSession.id || call.day < currentSession.activeDay
  );
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
