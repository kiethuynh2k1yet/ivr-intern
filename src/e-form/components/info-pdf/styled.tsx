import styled from "styled-components";

export const InfoCardWrawpper = styled.div`
  width: calc((100% / 2) - 9px);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 10px;
`;

export const Content = styled.div`
  padding-top: 26px;
  padding-left: 16px;

  display: flex;
  flex-direction: column;
  flex: 1;

  background: #f8f9f9;
  border-radius: 12px;
`;

export const Row = styled.div`
  display: flex;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Cell = styled.div<{ col: number }>`
  // width: ${({ col }) => `calc(100% / ${col})`};
  :first-child {
    margin-right: 8px;
  }
  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 125%;
  }

  h6 {
    font-weight: 700;
    font-size: 14px;
    line-height: 125%;

    color: #e87722;
  }
`;
