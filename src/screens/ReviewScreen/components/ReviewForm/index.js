import React, { useCallback } from "react";
import { Header } from "../../../../components/Header";
import RatingField from "./components/RatingField";
import BooleanField from "./components/BooleanField";
import { Formik, Form } from "formik";
import { Container, Title, Subtitle, Button, ReviewCard } from "./styles";

const ReviewForm = ({ name, time, id }) => {
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
    ({ showedUp, rating }, { setSubmitting }) => {
      try {
        console.log(`Rating is ${rating} and showedUp is ${showedUp}`);
        setSubmitting(false);
      } catch (error) {
        console.error("Error: ", error.message);
      }
    },
    []
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
              <RatingField />
              <BooleanField />
              <Button
                disabled={isSubmitting || Object.keys(errors).length}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </ReviewCard>
    </Container>
  );
};

export default ReviewForm;
