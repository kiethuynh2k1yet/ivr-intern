import React from "react";
import { useRouter } from "next/router";
import Delivery from "components/delivery/delivery";
import { data } from "data";

export default function Detail({ product }) {
  return <Delivery product={product} />;
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
