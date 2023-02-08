import React from "react";
import { data } from "data";
import Confirm from "components/confirm/confirm";
import {
  Stepper,
  StepperItem,
  Step,
  StepContainer,
  StepTitle,
} from "components/checkout/styled";
interface GiftProps {
  product: object;
}

export default function Accept({ product }: { product: GiftProps }) {
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
            <Step className="active" />
            <StepTitle>Xác nhận</StepTitle>
          </StepperItem>
        </Stepper>
      </StepContainer>{" "}
      <Confirm product={product} />
    </>
  );
}

// fetch data
export const getStaticProps = async (ctx: { params: { id: string } }) => {
  // ctx = params: { id: item.id.toString() },
  console.log(ctx);
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
