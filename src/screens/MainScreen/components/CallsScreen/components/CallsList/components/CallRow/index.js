import React from "react";
import {
  Container,
  Text,
  Button,
  StyledLink,
  StyledRouterLink,
} from "./styles";

const CallRow = ({ id, past, name, time, url }) => (
  <Container>
    <Text>
      {time.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        timeZoneName: "short",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </Text>
    <Text>{name}</Text>
    {past ? (
      <StyledRouterLink to={`/review/${id}`}>
        <Button>Review</Button>
      </StyledRouterLink>
    ) : (
      <StyledLink href={url} target="_blank">
        <Button>Go!</Button>
      </StyledLink>
    )}
  </Container>
);

export default CallRow;
