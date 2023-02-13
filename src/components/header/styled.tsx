import styled from "styled-components";

export const HeaderStepper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(24, 48, 40, 0.15);
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 80vw;
  max-width: 1024px;
  padding-top: 40px;
  display: flex;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
