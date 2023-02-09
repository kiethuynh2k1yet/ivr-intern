import styled from "styled-components";

export const Container = styled.div``;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  box-shadow: 0px 4px 20px rgba(24, 48, 40, 0.15);
  background: #ffffff;
`;

export const ProgressWrap = styled.div``;

export const LineProgress = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
`;

export const Line = styled.div`
  height: 2px;
  width: 1070px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #b9c0be;
  position: absolute;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 346px;
  }
`;
export const StyledUL = styled.ul`
  display: flex;
  width: 1070px;
  list-style: none;
  padding: 0px;
  margin: initial;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 768px) {
    width: 346px;
  }
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
`;

export const StyledPick = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  margin-top: 60px;
  margin-left: 40px;
  /* width: 75px; */
  float: left;
  //   margin-left: -30px;
  //   display: none;

  //   &:nth-child(1) {
  //     padding-left: 40px;
  //   }
`;

export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  margin-top: 60px;
  text-align: center;
  /* width: 75px; */
  //   float: left;
  //   margin-left: 30px;
`;

export const StyledConfirm = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  margin-top: 60px;
  /* width: 75px; */
  //   float: right;
  margin-right: 30px;
  //   display: none;
`;
