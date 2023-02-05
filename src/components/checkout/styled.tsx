import styled from "styled-components";

export const Stepper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StepperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  position: relative;
  flex-direction: column;

  &:before {
    content: "";
    position: absolute;
    background-color: red;
    width: 100%;
    height: 3px;
  }
`;
