import React, { useState } from "react";
import Gift from "components/gift/gift";
import Delivery from "components/delivery/delivery";
import Confirm from "./../confirm/Confirm";
import { Stepper, StepperItem, Step, StepContainer, StepTitle } from "./styled";
export default function Checkout() {
  const steps = ["Chọn quà", "Thông tin giao quà", "Xác nhận"];
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Gift />;
      case 1:
        return <Delivery />;
      case 2:
        return <Confirm />;
      default:
        throw new Error("Unknown step");
    }
  }
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <StepContainer>
        <Stepper>
          {steps.map((i, key) => (
            <StepperItem key={key}>
              <Step>{key}</Step>
              <StepTitle key={key}>{i}</StepTitle>
            </StepperItem>
          ))}
        </Stepper>
      </StepContainer>
      {activeStep === steps.length ? (
        <div>
          <p> Thank you for your order.</p>
          <p>
            {" "}
            Your order number is #2001539. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </p>
        </div>
      ) : (
        <>
          {getStepContent(activeStep)}
          {activeStep !== 0 && <button onClick={handleBack}>Back</button>}
          <button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Place order" : "Next"}
          </button>
        </>
      )}
    </>
  );
}
