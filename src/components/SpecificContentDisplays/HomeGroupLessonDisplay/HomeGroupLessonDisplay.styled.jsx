import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.navBg};
  background-image: ${({ $heroImage }) => ($heroImage ? `url(${$heroImage})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: background-image 0.5s ease-in-out, background-color 0.5s ease-in-out,
    border 0.25s ease-in-out;
  // ✅ ЗМІНИ В ПСЕВДОЕЛЕМЕНТІ ДЛЯ ДИНАМІЧНОГО ЗАТЕМНЕННЯ
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    // Використовуємо колір із теми для затемнення
    background-color: ${({ theme }) => theme.colors.overlayColor};
    z-index: 0;
  }
`;

export const HeroContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xlarge} 0 ${({ theme }) => theme.spacing.xlarge} 0;
  padding-bottom: ${({ theme }) => theme.spacing.large};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    color: ${({ theme }) => theme.colors.heroText};
    margin: 0 auto;
    margin-bottom: ${({ theme }) => theme.spacing.large};
    max-width: 500px;
    line-height: 1.2;
    transition: color 0.25s ease-in-out;
    ${({ theme }) => theme.media.down("sm")`
      font-size: ${({ theme }) => theme.fontSizes.xlarge};
      max-width: 300px;
    `}
  }
`;

export const HomeGroupLessonDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const MainContentWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium} 0 ${({ theme }) => theme.spacing.medium} 0;
  z-index: 2;
  position: relative;
`;

export const HomeGroupLessonTextWrapper = styled.div`
  line-height: 1.8;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.color};
  transition: color 0.25s ease-in-out; // ✅ Плавний перехід кольору тексту
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
  `}

  p {
    margin-bottom: 1em;
  }

  ol {
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  strong {
    color: ${({ theme }) => theme.colors.color};
    transition: color 0.25s ease-in-out; // ✅ Плавний перехід кольору жирного тексту
  }

  > * {
    margin-bottom: ${({ theme }) => theme.spacing.medium};

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-heading {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export const SectionContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};

  &:last-child {
    margin-bottom: 0;
  }

  h3,
  h4 {
    margin-bottom: ${({ theme }) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.small};
  }

  h3:first-child,
  h4:first-child {
    margin-top: 0;
  }
`;

export const VerseButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: currentColor;
  display: inline-block;
  position: relative;
  transition: color 0.25s ease-in-out; // ✅ Плавний перехід для кнопки-вірша

  &:focus {
    outline: none;
  }
`;

export const UnderlineClip = styled(motion.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  will-change: clip-path;
  clip-path: inset(0% 0% 0% 0%);
  pointer-events: none;
`;

export const StyledDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xlarge};
  line-height: 1.5;

  ${({ theme }) => theme.media.down("md")`
    margin-bottom: ${({ theme }) => theme.spacing.large};
  `}
`;
