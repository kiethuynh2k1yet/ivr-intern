import styled from "styled-components";

export const Container = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  background-color: #e87722;
  border-radius: 16px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #ffffff;
  padding-bottom: 12px;
`;

export const Row = styled.div`
  display: flex;
  background-color: #e87722;
  :not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const Cell = styled.div<{ $col: number }>`
  width: ${({ $col }) => `calc(100% / ${$col})`};
  label {
    font-weight: 500;
    font-size: 12px;
    color: #ffffff;
  }

  h6 {
    font-weight: 700;
    font-size: 14px;
    padding-top: 6px;
    color: #ffffff;
  }
`;
