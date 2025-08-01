import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  background: ${({ theme }) => theme.colors.background}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${({ theme }) => theme.borderRadius.medium}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${({ theme }) => theme.shadows.small}; // ОНОВЛЕНО: Використано shadows
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано spacing

  // ДОДАНО: Плавний перехід для фону розділу
  transition: background 0.4s ease-in-out;

  // Медіазапити для адаптивності
  ${({ theme }) => theme.media.down("sm")`
    padding: ${({ theme }) => theme.spacing.medium};
  `}
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors
  font-size: ${({ theme }) => theme.fontSizes.xlarge}; // ОНОВЛЕНО: Використано fontSizes
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  text-align: center;

  // Медіазапит для мобільних пристроїв
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  `}
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ОНОВЛЕНО: Використано fontSizes
  margin-bottom: ${({ theme }) => theme.spacing.medium}; // ОНОВЛЕНО: Використано spacing
  text-align: center;

  // ДОДАНО: Плавний перехід для кольору тексту, оскільки це <p>
  transition: color 0.4s ease-in-out;

  // Медіазапит для мобільних пристроїв
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  `}
`;

export default function SermonSection({ heading, content }) {
  return (
    <Section>
      {heading && <Heading>{heading}</Heading>}
      {content && content.map((t, i) => <Text key={i}>{t}</Text>)}
    </Section>
  );
}
