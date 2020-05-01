import React from "react";
import { Container, Text } from "./styles";

const Banner = ({text}) => {
    return (
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}

export default Banner;