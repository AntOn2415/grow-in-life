import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 64px); /* враховуємо хедер */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  color: #2d6a4f;
`;

export const Link = styled.a`
  color: #1d3557;
  text-decoration: underline;
`;
