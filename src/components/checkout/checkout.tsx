import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Stepper, StepperItem, Step, StepContainer, StepTitle } from "./styled";
export default function Checkout() {
  // const steps = ["Chọn quà", "Thông tin giao quà", "Xác nhận"];
  const router = useRouter();
  console.log(router);
  return (
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
    </StepContainer>
  );
}
