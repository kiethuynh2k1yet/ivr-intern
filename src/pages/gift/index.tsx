import React from "react";
import Gift from "components/gift/gift";
import { data } from "./../../data";

export default function index({ giftData }) {
  return <Gift giftData={giftData} />;
}

export const getStaticProps = () => {
  const giftData = data;
  return {
    props: { giftData },
  };
};
