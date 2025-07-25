import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h2`
  color: #457b9d;
  text-align: center; /* Додано для відповідності попередньому h1 стилю */
  margin-bottom: 40px; /* Додано для відповідності попередньому h1 стилю */
  font-size: 2.5rem; /* Додано для відповідності попередньому h1 стилю */
`;

// Новий styled component для повідомлення
export const NoSermonMessage = styled.p`
  text-align: center;
  color: #6b7280; /* text-gray-600 */
  margin-top: 2rem; /* mt-8 */
  font-size: 1.15rem; /* За замовчуванням */
`;
