import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 48px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(70, 83, 98, 0.06);
  padding: 32px 24px;
`;
const Heading = styled.h2`
  color: #465362;
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: center;
`;
const Text = styled.p`
  color: #465362;
  font-size: 1.15rem;
  margin-bottom: 20px;
  text-align: center;
`;

export default function SermonSection({ heading, content }) {
  return (
    <Section>
      {heading && <Heading>{heading}</Heading>}
      {content && content.map((t, i) => <Text key={i}>{t}</Text>)}
    </Section>
  );
}
