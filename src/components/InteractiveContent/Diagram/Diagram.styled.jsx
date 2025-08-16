import styled from "styled-components";

export const DiagramContainer = styled.div`
  width: 100%;
  max-width: 950px;
  margin: ${({ theme }) => theme.spacing.medium} auto;
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.down("md")`
    flex-direction: column; /* діаграма зверху, легенда знизу */
  `}
`;

export const ChartBox = styled.div`
  flex-grow: 1;
  min-width: 0;
  max-width: 70%;
  height: 300px;

  ${({ theme }) => theme.media.down("md")`
    max-width: 100%;
    margin-bottom: 12px;
    height: 200px;
  `}
`;

export const LegendBox = styled.div`
  width: 30%;
  flex-shrink: 0;
  padding-left: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.media.down("md")`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    gap: 12px;
  `}
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  ${({ theme }) => theme.media.down("md")`
    margin-bottom: 0;
    align-items: center;
  `}
`;

export const LegendColor = styled.span`
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: 8px;
  margin-top: 3px;
  border-radius: 3px;
`;

export const LegendText = styled.span`
  font-size: 13px;
  word-break: break-word;
  line-height: 1.3;

  ${({ theme }) => theme.media.down("md")`
    font-size: 12px;
  `}
`;
