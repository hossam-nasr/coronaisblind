import React from "react";
import { Container, Text } from "./styles";

const Banner = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Banner;
