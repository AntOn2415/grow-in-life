import styled from "styled-components";

export const ListContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.small};

  ${({ theme }) => theme.media.up("md")`
    padding: 0;
  `}
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  justify-content: center;
  align-items: stretch;

  ${({ theme }) => theme.media.down("xl")`
    gap: ${({ theme }) => theme.spacing.medium};
  `}

  ${({ theme }) => theme.media.down("md")`
    gap: ${({ theme }) => theme.spacing.small};
  `}
`;
