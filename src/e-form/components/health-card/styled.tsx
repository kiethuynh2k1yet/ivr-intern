import styled from "styled-components";

export const HealthContainer = styled.div`
  h6 {
    font-weight: 700;
    font-size: 14px;
    color: #e87722;
  }
`;

export const StyledOL1 = styled.ol`
  list-style-position: inside;
  margin: 0;
  padding: 10px;
`;

export const StyledOL = styled.ol`
  list-style-position: inside;
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  padding: 16px;
  background: #f8f9f9;
  border-radius: 12px;

  label {
    margin-top: 10px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #183028;
  margin-bottom: 10px;
`;

export const ChilrenLi = styled.li`
  font-weight: 500;
  font-size: 10px;
  color: #636566;
  margin-bottom: 10px;
  padding: 0;
  &:before {
    content: "";
    margin-left: -6.5px;
  }
`;

export const StyledLi = styled.li`
  font-weight: 500;
  font-size: 12px;
  color: #636566;

  &:before {
    content: "";
    margin-left: -9.5px;
  }
`;

export const RowChildren = styled.div`
  &:first-child {
    margin-top: 10px;
  }
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const RowContent = styled.div`
  label {
    font-weight: 500;
    font-size: 10px;
    color: #636566;
  }
  &:first-child {
    margin-top: 10px;
  }
  &:not(:first-child) {
    margin-top: 16px;
  }
`;
