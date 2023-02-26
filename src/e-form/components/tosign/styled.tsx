import styled from "styled-components";

export const Container = styled.div`
  max-height: 90px;
  flex: 1;
`;

export const Contract = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: start;
  padding: 0px 50px 42px;

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #183028;
    margin-bottom: 20px;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #e87722;
  }

  h6 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #183028;
    margin-bottom: 8px;
  }
`;
