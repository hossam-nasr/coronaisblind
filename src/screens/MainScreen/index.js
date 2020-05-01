import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList, resetFlake } from "../../helpers";
import CallsScreen from "./components/CallsScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { Container } from "./styles";
import Banner from "../../components/Banner";

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

  const reset = () => {
    resetFlake(currentUser.id);
    alert("Done! We're glad you're still interested!");
  };

  return (
    <Container>
      {currentUser ? (
        <>
          {currentUser.flake &&
            <Banner
              onClick={() => reset()}
              text="We've noticed you missed attending some of your calls. If you still wish to participate in this session of Corona is Blind, click on this banner."
            ></Banner>
          }
          <CallsScreen callList={callList} name={currentUser.firstName} />
        </>
      ) : (
        <WelcomeScreen />
      )}
    </Container>
  );
};

export default MainScreen;
