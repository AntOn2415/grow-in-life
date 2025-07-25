import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 48px;
  background: ${({ theme }) => theme.background}; // Використано основний колір фону з теми
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(70, 83, 98, 0.06); // Тінь залишена без змін, оскільки в темі немає властивості для тіні
  padding: 32px 24px;

  // ДОДАНО: Плавний перехід для фону розділу
  transition: background 0.4s ease-in-out;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.color}; // Використано основний колір тексту з теми
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: center;

  // ПЕРЕВІРЕНО: Перехід для 'color' вже визначено у GlobalStyles.js для всіх h2 елементів.
  // Тому тут окремо його додавати не потрібно, він вже працює автоматично.
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color}; // Використано основний колір тексту з теми
  font-size: 1.15rem;
  margin-bottom: 20px;
  text-align: center;

  // ДОДАНО: Плавний перехід для кольору тексту, оскільки це <p>
  transition: color 0.4s ease-in-out;
`;

export default function SermonSection({ heading, content }) {
  return (
    <Section>
      {heading && <Heading>{heading}</Heading>}
      {content && content.map((t, i) => <Text key={i}>{t}</Text>)}
    </Section>
  );
}
