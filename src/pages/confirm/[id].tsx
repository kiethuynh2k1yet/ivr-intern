import React from "react";
import { data } from "data";
import Confirm from "components/confirm/confirm";

interface GiftProps {
  product: object;
}

export default function Accept({ product }: { product: GiftProps }) {
  return (
    <>
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
