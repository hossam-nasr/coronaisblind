import React from "react";
import { Container, Text, Button, StyledLink } from "./styles";

const RevealRow = ({ name, lastName, email }) => (
  <Container>
    <Text>{name}</Text>
    <Text>{lastName}</Text>
    <StyledLink
      href={`mailto:${email}?subject=Hey we matched on Corona is Blind!`}
    >
      <Button>{email}</Button>
    </StyledLink>
  </Container>
);

export default RevealRow;
