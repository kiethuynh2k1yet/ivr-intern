import React from "react";
import Gift from "components/gift/gift";
import { data } from "./../../data";
import {
  Stepper,
  StepperItem,
  Step,
  StepContainer,
  StepTitle,
} from "components/checkout/styled";

interface GiftProps {
  giftData: object;
}
export default function index({ giftData }: { giftData: GiftProps }) {
  return (
    <>
      <StepContainer>
        <Stepper>
          <StepperItem>
            <Step className="active" />
            <StepTitle>Chọn quà</StepTitle>
          </StepperItem>

          <StepperItem>
            <Step />
            <StepTitle>Thông tin giao quà</StepTitle>
          </StepperItem>

          <StepperItem>
            <Step />
            <StepTitle>Xác nhận</StepTitle>
          </StepperItem>
        </Stepper>
      </StepContainer>{" "}
      <Gift giftData={giftData} />;
    </>
  );
}

export const getStaticProps = () => {
  const giftData = data;
  return {
    props: { giftData },
  };
};
