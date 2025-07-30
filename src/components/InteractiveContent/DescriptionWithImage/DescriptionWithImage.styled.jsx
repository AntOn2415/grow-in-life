import styled from "styled-components";

export const DescriptionWithImageContainer = styled.section`
  margin: 3rem 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column; /* За замовчуванням стовпець на мобільних */
  gap: 2rem; /* Відступ між текстовим блоком та ілюстрацією */
  align-items: center; /* Центрування елементів */

  .content-area {
    display: flex;
    flex-direction: column;
    width: 100%; /* Займає всю ширину контейнера */
    gap: 1.5rem; /* Відступ між текстовим блоком та зображенням всередині content-area */

    @media (min-width: 768px) {
      flex-direction: ${({ imagePosition }) => (imagePosition === "left" ? "row-reverse" : "row")};
      align-items: flex-start; /* Вирівнювання по верху */
    }
  }

  /* Якщо у вас є SectionHeading, він має власні стилі.
     Якщо ви хочете стилізувати h3 безпосередньо тут, можете так: */
  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.color}; /* Використовуйте змінну з теми */
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    width: 100%; /* Забезпечує, що заголовок займає всю ширину */
    @media (min-width: 768px) {
      text-align: left;
    }
  }
`;

export const TextContentWrapper = styled.div`
  flex: 2; /* Дозволяє займати більше місця для тексту */
  font-size: ${({ theme }) => theme.fontSizes.medium};
  line-height: 1.6;
  color: ${({ theme }) => theme.color};

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${({ theme }) => theme.accentColor};
  }

  @media (min-width: 768px) {
    padding-right: 20px; /* Відступ від зображення на великих екранах */
  }
`;

export const ImageWrapper = styled.div`
  flex: 1; /* Дозволяє займати доступне місце */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.secondaryBackground};
  padding: 15px;
  padding-top: 0; /* Відступ зверху для зображення */
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.extraSmall};
  max-width: 100%; /* Забезпечення адаптивності */

  @media (min-width: 768px) {
    max-width: 45%; /* Приклад, можна налаштувати */
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  margin-bottom: 0.5rem;
`;

export const ImageCaption = styled.figcaption`
  /* Перейменував на ImageCaption */
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.textColorLight};
  line-height: 1.4;
`;
