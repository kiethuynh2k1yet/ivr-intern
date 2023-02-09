import React from "react";
import Gift from "components/gift/gift";
import { data } from "./../../data";


interface GiftProps {
  giftData: object;
}
export default function index({ giftData }: { giftData: GiftProps }) {
  return (
    <>
  
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
