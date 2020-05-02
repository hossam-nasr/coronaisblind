import React from "react";
import { Container } from "./styles";
import pacman from "../../assets/img/pacman.svg";

const Loading = () => {
    return (
        <Container>
            <img src={pacman} />
        </Container>
    );
};

export default Loading;
