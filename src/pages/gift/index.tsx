import React from "react";
import Gift from "components/gift/gift";
import { data } from "./../../data";
import {
  StyledUL,
  StyledLi,
  Container,
  SubContainer,
  ProgressWrap,
  Line,
  LineProgress,
  StyledPick,
  StyledSpan,
  StyledConfirm,
} from "components/stepper/styled";
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
