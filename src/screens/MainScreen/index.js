import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Auth.js";
import { getCallList } from "../../helpers";
import CallsScreen from "./components/CallsScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { Container } from "./styles";

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

  return (
    <Container>
      {currentUser ? (
        <CallsScreen callList={callList} name={currentUser.firstName} />
      ) : (
        <WelcomeScreen />
      )}
    </Container>
  );
};

export default MainScreen;
