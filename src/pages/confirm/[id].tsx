import React from "react";
import { data } from "data";
import Confirm from "components/confirm/confirm";
import { GetStaticProps } from "next";
interface GiftProps {
  id: string;
  desc: string;
  title: string;
  list: string[];
  img: string;
}

export default function Accept({ product }: { product: GiftProps }) {
  return (
    <>
      <Confirm product={product} />
    </>
  );
}

// fetch data
export const getStaticProps: GetStaticProps = async (ctx) => {
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
