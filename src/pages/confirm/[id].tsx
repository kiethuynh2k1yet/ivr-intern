import React from "react";
import { data } from "data";
import Checkout from "components/checkout/checkout";
import Confirm from "components/confirm/confirm";

export default function Accept({ product }) {
  return (
    <>
      <Checkout />;
      <Confirm product={product} />
    </>
  );
}

// fetch data
export const getStaticProps = async (ctx) => {
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
