// src/components/Home/Home.jsx
import React from "react";
import { Container, Title, LogoImage } from "./Home.styled";
import { useTheme } from "../../contexts/ThemeProvider";

import darkLogo from "../../images/logo-dark.png";
import lightLogo from "../../images/logo-light.png";

const Home = () => {
  const { mode } = useTheme();

  const currentLogo = mode === "dark" ? darkLogo : lightLogo;

  return (
    <Container>
      <LogoImage src={currentLogo} alt="Логотип" />

      <Title>Зростай у Житті</Title>
      <p>Пізнавай — Живи — Ділися</p>
    </Container>
  );
};

export default Home;
