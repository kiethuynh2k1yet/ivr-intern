import React from "react";
import { Form2Wrapper, Form2Title, BodyWrapper, Form2User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import {
  fatca,
  infoData,
  documentData,
  jobData,
  contactData,
  policyData,
} from "infoData";
export default function Form2() {
  return (
    <Form2Wrapper>
      <Form2Title>Thông tin được yêu cầu điều chỉnh như sau:</Form2Title>
      <BodyWrapper>
        <Form2User>
          <InfoCard title="Thông tin cá nhân" data={infoData} />
          <InfoCard title="Đạo luật FATCA" data={fatca} />
        </Form2User>
      </BodyWrapper>
    </Form2Wrapper>
  );
}
