import React from "react";

import { Container, Label, Text, Hakl } from "./styles";

const Option = ({ type, name, label, value, required }) => {
  return (
    <Container className={type}>
      <Label>
        <Hakl type={type} name={name} value={value} required={required} />
        <Text>{label}</Text>
      </Label>
    </Container>
  );
};

export default Option;
