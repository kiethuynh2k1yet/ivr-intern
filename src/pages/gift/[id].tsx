import React from "react";
import Delivery from "components/delivery/delivery";
import { data } from "data";
import {
  Stepper,
  StepperItem,
  Step,
  StepContainer,
  StepTitle,
} from "components/checkout/styled";
export default function Detail({ product }: { product: object }) {
  return (
    <>
      <StepContainer>
        <Stepper>
          <StepperItem>
            <Step className="active" />
            <StepTitle>Chọn quà</StepTitle>
          </StepperItem>

          <StepperItem>
            <Step className="active" />
            <StepTitle>Thông tin giao quà</StepTitle>
          </StepperItem>

          <StepperItem>
            <Step />
            <StepTitle>Xác nhận</StepTitle>
          </StepperItem>
        </Stepper>
      </StepContainer>{" "}
      <Delivery product={product} />
    </>
  );
}

// fetch data
export const getStaticProps = async (ctx: { params: { id: string } }) => {
  // ctx = params: { id: item.id.toString() },

  const id = ctx.params.id;
  // 1 product
  const product = data.filter((item) => item.id === id)[0];
  return {
    props: { product },
  };
};

// di theo Id
export const getStaticPaths = () => {
  const products = data;
  const paths = products.map((item) => {
    return {
      params: { id: item.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
