import React from "react";
import styled from "styled-components";

const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: inherit;
`;

const PlaceholderText = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PlaceholderButton = styled.button`
  background: ${({ theme }) => theme.colors.buttonBg};
  color: ${({ theme }) => theme.colors.buttonColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.hoverBtn};
  }
`;

export default function Placeholder({ onClick }) {
  return (
    <PlaceholderWrapper>
      <PlaceholderText>
        Немає контенту для відображення.
        <br />
        Оберіть книгу, щоб почати читати.
      </PlaceholderText>
      <PlaceholderButton onClick={onClick}>Відкрити меню</PlaceholderButton>
    </PlaceholderWrapper>
  );
}
