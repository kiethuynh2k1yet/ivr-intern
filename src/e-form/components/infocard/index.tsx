import React from "react";
import {
  InfoRow,
  InfoWrapper,
  InfoTitle,
  InfoDetail,
  InformationWrap,
} from "./styled";
import Image from "next/image";
export default function InfoCard({ data }) {
  console.log(data);
  return (
    <InfoWrapper>
      {data.map((item, index) => (
        <InfoRow key={index}>
          {item.map((child, i) => (
            <InformationWrap key={i}>
              {child.label === `${process.env.basePath}/images/pdf.svg` ? (
                <Image src={child.label} width="60" height="60" alt="" />
              ) : (
                <>
                  <InfoTitle>{child.label}</InfoTitle>
                  <InfoDetail>{child.value}</InfoDetail>
                </>
              )}
            </InformationWrap>
          ))}
        </InfoRow>
      ))}
    </InfoWrapper>
  );
}
