import styled from "styled-components";

export const InfoCardWrawpper = styled.div`
  width: calc((100% / 2) - 9px);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  color: #183028;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  padding-top: 26px;
  padding-bottom: 40px;
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
    margin-bottom: 27px;
  }
`;

export const Cell = styled.div<{ col: number }>`
  // width: ${({ col }) => `calc(100% / ${col})`};
  :first-child {
    margin-right: 8px;
  }
  

  img {
    width: 60px;
    height: 61px;
  }
`;
