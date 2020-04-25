import React from "react";
import {
  Container,
  Text,
  Button,
  StyledLink,
  StyledRouterLink
} from "./styles";

const CallsList = ({ id, past, name, time, url }) => (
  <Container>
    <Text>{time}</Text>
    <Text>{name}</Text>
    {past ? (
      <StyledRouterLink to={`/review?callId=${id}`}>
        <Button>Review</Button>
      </StyledRouterLink>
    ) : (
      <StyledLink href={url} target="_blank">
        <Button>Go!</Button>
      </StyledLink>
    )}
  </Container>
);

export default CallsList;
