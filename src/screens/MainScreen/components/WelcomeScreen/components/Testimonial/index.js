import React from "react";
import { Container, Text } from "./styles";

const Testimonial = ({ name, text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Testimonial;
