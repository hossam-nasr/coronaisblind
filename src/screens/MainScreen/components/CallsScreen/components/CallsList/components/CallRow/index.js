import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Text,
  Button,
  DisabledButton,
  StyledLink,
  StyledRouterLink,
} from "./styles";
import { UserContext } from "../../../../../../../../Auth";
import { alreadyReviewed } from "../../../../../../../../helpers";

const CallRow = ({ id, past, name, time, url }) => {
  const { currentUser } = useContext(UserContext);
  const [reviewState, setReviewState] = useState(true);

  useEffect(() => {
    const getRevs = async () => {
      setReviewState(await alreadyReviewed(currentUser.id, id));
    }
    getRevs();
  }, [])

  return (
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
        <>
          {reviewState ? (
            <StyledRouterLink to={`/review/${id}`}>
              <Button>Review</Button>
            </StyledRouterLink>
          ) : (
              <DisabledButton>Reviewed</DisabledButton>
            )}
        </>
      ) : (
          <StyledLink href={url} target="_blank">
            <Button>Go!</Button>
          </StyledLink>
        )}
    </Container>
  );

}
export default CallRow;
