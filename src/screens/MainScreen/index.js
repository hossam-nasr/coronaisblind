import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList, resetFlake, subscribeNextSession, getUserSessionStatus } from "../../helpers";
import CallsScreen from "./components/CallsScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { Container } from "./styles";
import Banner from "../../components/Banner";
import { SessionContext } from "../../Session";
import Loading from "../../components/Loading";

const MainScreen = () => {
  const { currentUser, userLoading, setUserLoading } = useContext(UserContext);
  const { currentSession, nextSession, sessionLoading } = useContext(
    SessionContext
  );

  const [callList, setCallList] = useState([]);
  const [revealList, setRevealList] = useState([]);
  const [userSessionStatus, setUserSessionStatus] = useState(false);

  useEffect(() => {
    const getCalls = async () => {
      setUserLoading(true);
      const { calls, reveals } = await getCallList(currentUser);
      setCallList(calls);
      setRevealList(reveals);
      setUserSessionStatus(await getUserSessionStatus(currentUser.session));
      setUserLoading(false);
    };
    if (currentUser) {
      getCalls();
    }
  }, [currentUser]);

  const reset = async () => {
    await resetFlake(currentUser.id);
    alert("Done! We're glad you're still interested!");
  };

  const joinNextSession = async () => {
    await subscribeNextSession(currentUser.id, nextSession);
    alert("You're now subscribed to the next session of Corona is Blind");
  };

  return (
    <Container>
      {userLoading || sessionLoading ? (
        <Loading />
      ) : currentUser && currentSession ? (
        <>
          {currentUser.flake && (
            <Banner
              onClick={() => reset()}
              text="We've noticed you missed attending some of your calls. If you still wish to participate in this session of Corona is Blind, click on this banner."
            ></Banner>
          )}
          {userSessionStatus && (
            <Banner
              onClick={() => joinNextSession()}
              text={`The current session has ended. If you wish to participate in the next session, click on this banner.`}
            ></Banner>
          )}
          <CallsScreen
            callList={callList}
            name={currentUser.firstName}
            sessionNum={currentSession.number}
            dayNum={currentSession.activeDay}
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
