import styled from "styled-components";
import { motion } from "framer-motion";

export const TimelineContainer = styled.div`
  margin: 3rem 0;
  position: relative;
  padding-left: 30px;
  padding-right: 15px; /* Відступ для вертикальної лінії */
  overflow-x: hidden;
  padding-bottom: 0;

  /* Вертикальна лінія */
  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${({ theme }) => theme.borderColor};
    z-index: 0;
  }

  ${({ theme }) => theme.media.down("sm")`
    padding-left: 20px;
    &::before {
      left: 9px;
    }
  `}
`;

export const HorizontalLine = styled.div`
  display: none;
`;

export const TimelineEventWrapper = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 30px;
  text-align: left;

  ${({ theme }) => theme.media.down("sm")`
    padding-left: 20px;
    margin-bottom: 1.5rem;
  `}
`;

export const EventDot = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 5px; /* Вирівнювання по вертикалі з верхньою частиною EventContent */
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.background};
  z-index: 1;
  transform-origin: center;

  ${({ theme }) => theme.media.down("sm")`
    width: 10px;
    height: 10px;
    border: 1px solid ${({ theme }) => theme.background};
  `}
`;

export const EventContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.small};
  border: 1px solid ${({ theme }) => theme.borderColor};
  min-height: auto;
  display: flex;
  flex-direction: column; /* Основний вміст картки йде стовпчиком */
  justify-content: center;
  position: relative; /* Щоб EventTitle міг використовувати flex */
  cursor: pointer;
`;

// EventTitle тепер знову буде головним flex-контейнером для року/назви та іконки
export const EventTitle = styled.h4`
  color: ${({ theme }) => theme.accentColor};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0; /* Прибираємо всі стандартні відступи h4 */
  font-weight: bold;
  line-height: 1.3;

  display: flex; /* РОБИМО EventTitle FLEX-КОНТЕЙНЕРОМ */
  flex-direction: row; /* Рік/назва та іконка в рядок */
  justify-content: space-between; /* Розносимо їх по краях */
  align-items: flex-start; /* Вирівнюємо по верху, якщо вміст різний */

  /* Контейнер для року та назви */
  & > div:first-of-type {
    display: flex;
    flex-direction: column; /* Рік над назвою */
    align-items: flex-start; /* Вирівнюємо по лівому краю */
    flex-grow: 1; /* Дозволяємо цьому блоку займати весь доступний простір */
    margin-right: 10px; /* Відступ від іконки, щоб не було тісно */
  }

  /* Стилі для іконки (motion.span), яка є прямим нащадком EventTitle */
  & > span {
    flex-shrink: 0; /* Щоб іконка не стискалася */
    line-height: 1.3; /* Вирівнюємо по заголовку */
    font-size: ${({ theme }) => theme.fontSizes.large}; /* Збільшимо розмір іконки */
    color: ${({ theme }) => theme.colorSecondary}; /* Можливо, інший колір для контрасту */
  }

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    
    & > div:first-of-type {
        margin-right: 8px;
    }
    
    & > span {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  `}
`;

export const EventYear = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colorSecondary};
  margin-bottom: 0.2rem; /* Відступ між роком та заголовком */
  white-space: nowrap; /* Рік в один рядок */
  font-weight: normal;

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  `}
`;

// ✅ EventDescriptionWrapper ВИДАЛЕНО, оскільки його функціонал у CollapsibleContent.
// ✅ Його стилі більше не потрібні тут.

export const EventDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.color};
  line-height: 1.5;
  margin-bottom: 0;
  word-wrap: break-word;
  /* Видалені посилання на EventDescriptionWrapper */

  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.small};
  `}
`;

export const EventVersesContainer = styled.div`
  padding-top: 0.2rem;
  border-top: 1px solid ${({ theme }) => theme.dividerColor};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  cursor: default;
  /* Видалені посилання на EventDescriptionWrapper */

  ${({ theme }) => theme.media.down("sm")`
    gap: 6px;
    margin-top: ${({ theme }) => theme.spacing.small};
    padding-top: ${({ theme }) => theme.spacing.xsmall};
    /* Видалені посилання на EventDescriptionWrapper */
  `}
`;
