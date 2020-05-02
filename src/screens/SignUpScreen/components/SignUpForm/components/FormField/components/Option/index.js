import React from "react";

import { Container, Label, Text, Hakl } from "./styles";

const Option = ({ type, name, label, value }) => (
  <Container className={type}>
    <Label>
      <Hakl type={type} name={name} value={value} />
      <Text>{label}</Text>
    </Label>
  </Container>
);

export default Option;
