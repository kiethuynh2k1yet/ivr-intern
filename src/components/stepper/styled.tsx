import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 80vw;
  max-width: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;

  @media (max-width: 768px) {
  }
`;

export const LineProgress = styled.div`
  display: flex;
  width: 80vw;
  max-width: 1024px;
`;

export const Line = styled.div`
  height: 2px;
  width: 80vw;
  max-width: 1024px;
  border-bottom: 2px solid #b9c0be;

  position: absolute;
  margin-top: 10px;

  @media (max-width: 768px) {
  }
`;
export const StyledUL = styled.ul`
  display: flex;
  width: 1024px;
  list-style: none;
  padding: 0px;
  justify-content: space-between;
  z-index: 1;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #b9c0be;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  background: #b9c0be;
  &.active {
    background: #e87722;
    color: #e87722;
  }
  &:nth-child(1) {
    justify-content: flex-start;
  }

  &:nth-child(3) {
    justify-content: flex-end;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  margin-top: 60px;
  text-align: center;
`;
