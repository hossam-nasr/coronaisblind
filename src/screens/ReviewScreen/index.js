import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Auth.js";
import { getCallObj } from "../../helpers";
import ReviewForm from "./components/ReviewForm";
import ErrorMessage from "./components/ErrorMessage";
import { Container } from "./styles";

const ReviewScreen = () => {
  const { callId } = useParams();
  const { currentUser } = useContext(UserContext);
  const [call, setCall] = useState(null);

  useEffect(() => {
    const getCall = async () => {
      if (callId && callId !== "" && currentUser && currentUser.id) {
        setCall(await getCallObj(callId, currentUser.id));
      }
    };
    getCall();
  }, [callId, currentUser]);

  return (
    <Container>
      {call ? <ReviewForm call={call} /> : <ErrorMessage />}
    </Container>
  );
};

export default ReviewScreen;
