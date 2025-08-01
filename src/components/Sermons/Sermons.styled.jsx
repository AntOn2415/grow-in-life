// Припускається, що це файл для стилів сторінки, наприклад, SermonsPage.styled.jsx

import styled from "styled-components";

export const Container = styled.div`
  // Цей компонент не має прямих властивостей кольору, які потрібно змінювати.
  // Його фон та колір тексту, швидше за все, контролюються батьківськими компонентами
  // (наприклад, Main, Wrapper у Layout) або глобальними стилями body, де переходи вже налаштовані.
  // Додамо медіазапит для адаптивності.
  ${({ theme }) => theme.media.up("md")`
    padding: ${({ theme }) => theme.spacing.medium};
  `}
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано основний колір тексту з теми
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  font-size: ${({ theme }) => theme.fontSizes.xxlarge}; // ОНОВЛЕНО: Використано fontSizes

  // Медіазапит для мобільних пристроїв, щоб зменшити шрифт
  ${({ theme }) => theme.media.down("sm")`
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  `}
`;

// Новий styled component для повідомлення
export const NoSermonMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.color}; // ОНОВЛЕНО: Використано основний колір тексту з теми
  margin-top: ${({ theme }) => theme.spacing.large}; // ОНОВЛЕНО: Використано spacing
  font-size: ${({ theme }) => theme.fontSizes.medium}; // ОНОВЛЕНО: Використано fontSizes

  // ДОДАНО: Плавний перехід для кольору тексту, оскільки це <p>
  transition: color 0.4s ease-in-out;
`;
