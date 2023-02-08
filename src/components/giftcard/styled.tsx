import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 40px 202px 40px;
`;

export const Container = styled.div`
  width: 267px;
  height: 213px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e87722;

  @media (max-width: 768px) {
    margin-right: 74px;
  }
`;

export const SubContainer = styled.div`
  position: relative;
  width: 293px;
  height: 250px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  top: 24px;
  left: 38px;
`;

export const GiftTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: 16px 0 8px 24px;
  color: #0096a9;
  text-transform: uppercase;
`;

export const StyledUL = styled.ul`
  list-style-type: "-";
  font-weight: 450;
  font-size: 14px;
  line-height: 24px;
  color: #0096a9;
`;

export const StyledLi = styled.li`
  padding-left: 5px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 24px;
`;
export const StyledButton = styled.button`
  background: #e87722;
  border-radius: 4px;
  padding: 5px 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
`;
