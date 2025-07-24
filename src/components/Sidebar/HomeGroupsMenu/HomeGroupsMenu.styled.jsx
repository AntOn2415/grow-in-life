import styled from "styled-components";

export const Section = styled.div`
  margin-bottom: 16px;
`;
export const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 15px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
`;
export const ListItem = styled.li`
  padding: 4px 0 4px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.color};
`;
