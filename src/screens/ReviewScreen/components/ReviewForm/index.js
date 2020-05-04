import React, { useCallback } from "react";
import { Header } from "../../../../components/Header";
import RatingField from "./components/RatingField";
import BooleanField from "./components/BooleanField";
import { Formik, Form } from "formik";
import {
  Container,
  Title,
  Subtitle,
  Button,
  ReviewCard,
  ButtonContainer
} from "./styles";
import { postCallReview } from "../../../../helpers";
import ReactGA from 'react-ga';

const ReviewForm = ({
  name,
  time,
  callId,
  theReviewer,
  theReviewed,
  setReviewComplete
}) => {
  /*  const [rating, setRating] = useState(0); */

  const validateForm = useCallback(({ rating, showedUp }) => {
    const errors = {};
    console.log("rating: ", rating);
    if (rating === 0) {
      errors.rating = "Required";
    }
    if (showedUp === null) {
      errors.showedUp = "Required";
    }
    return errors;
  }, []);

  const handleReview = useCallback(
    async ({ showedUp, rating }, { setSubmitting }) => {
      try {
        const showedUpBool = showedUp === "true";
        await postCallReview({
          callId,
          theReviewer,
          theReviewed,
          review: rating,
          showedUp: showedUpBool
        });
        setSubmitting(false);
        ReactGA.event({
          category: "Button",
          action: "Review"
        });
        setReviewComplete();
      } catch (error) {
        console.error("Error: ", error.message);
      }
    },
    [callId, setReviewComplete, theReviewer, theReviewed]
  );

  return (
    <Container>
      <Title>{`Review call with ${name} on ${time}`}</Title>
      <Subtitle>
        Help us match you better by reviewing your recent calls!
      </Subtitle>
      <ReviewCard>
        <Header title="Review!" />
        <Formik
          initialValues={{ showedUp: null, rating: 0 }}
          validate={validateForm}
          onSubmit={handleReview}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <BooleanField />
              <RatingField />
              <ButtonContainer>
                <Button
                  disabled={isSubmitting || Object.keys(errors).length}
                  type="submit"
                >
                  Submit
                </Button>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </ReviewCard>
    </Container>
  );
};

export default ReviewForm;
