import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e87722;
  border-radius: 16px;
`;

export const Wapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;

  background: #f8f9f9;
  border-radius: 12px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: #ffffff;
`;

export const Row = styled.div`
  display: flex;
  :not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const Cell = styled.div<{ col: number }>`
  width: ${({ col }) => `calc(100% / ${col})`};
  word-spacing: -0.5px;
  label {
    font-weight: 500;
    font-size: 12px;
    color: #636566;
  }

  h6 {
    font-weight: 700;
    font-size: 14px;
    padding-top: 6px;
    color: #e87722;
  }
`;