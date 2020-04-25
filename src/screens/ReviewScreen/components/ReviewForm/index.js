import React from "react";
import { Container, Title, Subtitle } from "./styles";

const ReviewForm = ({ name, time, id }) => (
  <Container>
    <Title>{`Review call with ${name} on ${time}`}</Title>
    <Subtitle>
      Help us match you better by reviewing your recent calls!
    </Subtitle>
  </Container>
);

export default ReviewForm;
