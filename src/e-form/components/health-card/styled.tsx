import styled from "styled-components";

export const HealthContainer = styled.div`
  h6 {
    font-weight: 700;
    font-size: 14px;
    color: #e87722;
    margin-top: 6px;
  }
`;

export const Content = styled.div`
  padding: 16px;
  background: #f8f9f9;
  border-radius: 12px;

  label {
    margin-top: 10px;
  }

  span {
    margin-right: 4px;
  }
`;

export const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledLi = styled.li`
  font-weight: 500;
  font-size: 12px;
  color: #636566;
  line-height: 125%;
`;

export const ChildrenLi = styled.li`
  font-weight: 500;
  font-size: 10px;
  color: #636566;
  line-height: 125%;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #183028;
  margin-bottom: 10px;
  line-height: 125%;
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
