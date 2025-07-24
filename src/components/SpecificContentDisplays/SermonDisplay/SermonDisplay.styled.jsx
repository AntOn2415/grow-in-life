// src/components/SpecificContentDisplays/SermonDisplay/SermonDisplay.styled.js
import styled from "styled-components";

export const SermonDisplayContainer = styled.div`
  /* Загальні стилі для контейнера вмісту проповіді */
  /* Ці стилі можуть бути для всього блоку проповіді, якщо MainContentWrapper є для внутрішнього контенту */
  /* max-width та margin: 0 auto; вже перенесено до MainContentWrapper */
  /* padding: 0 1rem; теж може бути перенесено */
`;

export const SermonTitleWrapper = styled.div`
  background-color: #4a90e2;
  color: white;
  padding: 1.5rem 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
  margin-bottom: 2rem;
`;

// Новий styled component для обгортки основного контенту (замість <main> з класами)
export const MainContentWrapper = styled.main`
  max-width: 960px; /* container */
  margin-left: auto; /* mx-auto */
  margin-right: auto; /* mx-auto */
  margin-top: 2rem; /* mt-8 */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
`;

export const SermonTextWrapper = styled.div`
  color: #4a5568; /* text-gray-700 */
`;

export const StyledParagraph = styled.p`
  margin-bottom: 1rem; /* mb-4 */
  font-size: 1.15rem;
  line-height: 1.6;
`;

export const RevealCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem; /* gap-6 */
  margin-top: 1.5rem; /* my-6 */
  margin-bottom: 1.5rem; /* my-6 */
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
