import React from "react";

import fs from "../../imgs/fruitsalad.png";

import {
  Container,
  Description,
  Title,
  About,
  Button,
  Gallery,
  Image,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <Container>
      <Description>
        <Title>
          <h1>sladmél</h1>
        </Title>
        <About>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            suscipit necessitatibus mollitia blanditiis optio tempore, vero
            nostrum autem quasi libero dolor doloribus, quaerat odit fugiat
            alias perspiciatis corporis deleniti. Maiores. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </About>
        <Button to={"/menu"}>
          <p>MENU</p>
        </Button>
      </Description>
      <Gallery>
        <Image src={fs} />
      </Gallery>
    </Container>
  );
};

export default Landing;
