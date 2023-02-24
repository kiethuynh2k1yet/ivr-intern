import styled from "styled-components";

export const InfoCardWrawpper = styled.div`
  width: calc((100% / 2) - 9px);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #183028;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;

  background: #f8f9f9;
  border-radius: 12px;
`;

export const Row = styled.div`
  display: flex;
  :not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const Cell = styled.div<{ col: number }>`
  width: ${({ col }) => `calc(100% / ${col})`};
  label {
    font-weight: 500;
    font-size: 12px;
    color: #636566;
  }

  p {
    font-weight: 700;
    font-size: 14px;
    padding-top: 6px;
    color: #e87722;
    font-style: normal;
    margin:0;
  }
`;
