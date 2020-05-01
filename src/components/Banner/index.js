import React from "react";
import { Container, Text, Renew } from "./styles";
import { resetFlake } from "../../helpers";

const Banner = ({currentUser}) => {

    const reset = async () => {
        resetFlake(currentUser);
        alert("Done! We're glad you're still interested!")
    }

    return (
        <Container>
            <Text>We've noticed you missed attending some of your calls, do you still wish to participate in this session of Corona is Blind? If yes, please <Renew onClick={reset}>click here.</Renew></Text>
        </Container>
    )
}

export default Banner;