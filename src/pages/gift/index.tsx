import React from "react";
import Gift from "components/gift/gift";
import { data } from "./../../data";
import Checkout from "components/checkout/checkout";

export default function index({ giftData }) {
  return (
    <>
      <Checkout />
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
