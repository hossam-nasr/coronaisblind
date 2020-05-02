import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Auth.js";
import { getCallObj } from "../../helpers";
import ReviewForm from "./components/ReviewForm";
import ErrorMessage from "./components/ErrorMessage";
import ReviewComplete from "./components/ReviewComplete";
import { Container } from "./styles";
import Loading from "../../components/Loading";

const ReviewScreen = () => {
  const { callId } = useParams();
  const { currentUser } = useContext(UserContext);
  const [call, setCall] = useState(null);
  const [reviewComplete, setReviewComplete] = useState(false);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const getCall = async () => {
      if (callId && callId !== "" && currentUser && currentUser.id) {
        setCall(await getCallObj(callId, currentUser.id));
      }
    };
    getCall();
  }, [callId, currentUser]);

  useEffect(() => {
    if (currentUser && call) {
      if (
        (currentUser.id === call.user1Id && call.user1Review) ||
        (currentUser.id === call.user2Id && call.user2Review)
      ) {
        setReviewComplete(true);
      }
    }
  }, [call, currentUser]);

  useEffect(() => {
    if (currentUser) setTimeout(() => { setLoadingState(false) }, 500);
    else setLoadingState(true);
  }, [currentUser]);

  return (
    <Container>
      {loadingState && <Loading></Loading>}
      {reviewComplete ? (
        <ReviewComplete />
      ) : call ? (
        <ReviewForm
          name={call.name}
          time={call.time}
          callId={call.id}
          theReviewer={currentUser.id}
          setReviewComplete={() => {
            setReviewComplete(true);
          }}
          theReviewed={call.otherCallerId}
        />
      ) : (
            <ErrorMessage />
          )}
    </Container>
  );
};

export default ReviewScreen;
