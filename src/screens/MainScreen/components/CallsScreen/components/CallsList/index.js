import React, { useContext } from "react";
import { SessionContext } from "../../../../../../Session";
import CallRow from "./components/CallRow";
import RevealRow from "./components/RevealRow";
import { Container, Title, CallsContainer, PreviousTitle } from "./styles";

const CallRow = ({ callList, revealList }) => {
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
      {revealList.length > 0 && (
        <>
          <Title>Reveals!</Title>
          <CallsContainer>
            {revealList.map(({ name, lastName, email, id }) => (
              <RevealRow
                key={id}
                lastName={lastName}
                name={name}
                email={email}
              />
            ))}
          </CallsContainer>
        </>
      )}
      {upcomingCalls.length > 0 && (
        <>
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
        </>
      )}
      {pastCalls.length > 0 && (
        <>
          <PreviousTitle>Previous Calls</PreviousTitle>
          <CallsContainer>
            {pastCalls.map(({ id, time, name }) => (
              <CallRow key={id} time={time} name={name} id={id} past />
            ))}
          </CallsContainer>
        </>
      )}
    </Container>
  );
};

export default CallRow;
