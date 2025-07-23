import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
`;
const Title = styled.h2`
  color: #f4a261;
`;

const SundaySchool = () => (
  <Container>
    <Title>Воскресна школа</Title>
    <p>Тут інформація про воскресну школу.</p>
  </Container>
);

export default SundaySchool;
