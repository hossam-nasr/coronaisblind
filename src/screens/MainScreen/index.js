import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList, resetFlake, subscribeNextSession } from "../../helpers";
import CallsScreen from "./components/CallsScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { Container } from "./styles";
import Banner from "../../components/Banner";
import { SessionContext } from "../../Session";

const MainScreen = () => {
  const { currentUser } = useContext(UserContext);
  const { currentSession, nextSession } = useContext(SessionContext);

  const [callList, setCallList] = useState([]);
  const [revealList, setRevealList] = useState([]);

  useEffect(() => {
    const getCalls = async () => {
      const { calls, reveals } = await getCallList(currentUser);
      setCallList(calls);
      setRevealList(reveals);
    };

    getCalls();
  }, [currentUser]);

  const joinNextSession = async () => {
    await subscribeNextSession(currentUser.id, nextSession);
    alert("You're now subscribed to the next session of Corona is Blind");
  };

  const reset = async () => {
    await resetFlake(currentUser.id);
    alert("Done! We're glad you're still interested!");
  };
  return (
    <Container>
      {currentUser && currentSession ? (
        <>
          {currentUser.flake && (
            <Banner
              onClick={() => reset()}
              text="We've noticed you missed attending some of your calls. If you still wish to participate in this session of Corona is Blind, click on this banner."
            ></Banner>
          )}
          {currentSession.done && currentUser.session !== nextSession && (
            <Banner
              onClick={() => joinNextSession()}
              text={`The current session ends on ${new Date(
                currentSession.endDate
              ).toLocaleDateString(
                "en-US"
              )}. If you wish to participate in the next session, click on this banner.`}
            ></Banner>
          )}
          <CallsScreen
            callList={callList}
            name={currentUser.firstName}
            revealList={revealList}
          />
        </>
      ) : (
        <WelcomeScreen />
      )}
    </Container>
  );
};

export default MainScreen;
