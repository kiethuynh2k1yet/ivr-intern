import styled from "styled-components";

export const StepContainer = styled.div`
  background: #ffffff;
  height: 70px;
  margin-top: 24px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(24, 48, 40, 0.15);
`;
export const Stepper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 32px;
`;

export const StepperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  position: relative;
  flex-direction: column;

  &:not(:first-child):before {
    content: "";
    position: absolute;
    background: #b9c0be;
    width: 97.8%;
    height: 3px;
    right: 49.99%;

    top: 20%;
    transform: translateY(50%);

    @media (max-width: 767px) {
      right: 44.79%;
    }
  }
`;

export const Step = styled.div`
  border-radius: 100%;
  position: relative;
  width: 24px;
  height: 24px;
  background: #b9c0be;
  color: #b9c0be;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background: red;
  }
`;

export const StepTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #b9c0be;
`;
