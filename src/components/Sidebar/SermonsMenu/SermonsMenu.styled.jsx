import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 16px;
`;
export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  transition: background 0.1s;
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.navActive};
    color: ${({ theme }) => theme.background};
    outline: none;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled.li`
  padding: 4px 0 4px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
`;
export const Toggle = styled.span`
  color: ${({ theme }) => theme.buttonBg};
  font-size: 16px;
  margin-left: auto;
  pointer-events: none;
`;
