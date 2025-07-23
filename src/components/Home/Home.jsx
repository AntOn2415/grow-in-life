import React from "react";
import { Container, Title, Link } from "./Home.styled";

const Home = () => (
  <Container>
    <Title>Зростай у Житті</Title>
    <p>
      <Link href="https://www.bible.com/uk/bible/143/ezra.7.10">
        Ездра навчався, виконував закон і навчав інших.
      </Link>
    </p>
  </Container>
);

export default Home;
