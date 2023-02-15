import React from "react";
import { Form2Wrapper, Form2Title, BodyWrapper, Form2User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import { fatca, addressData } from "infoData";
import ListItem from "../list-item";
import { confirmList } from "listData";

export default function Form2() {
  return (
    <Form2Wrapper>
      <Form2Title>Thông tin được yêu cầu điều chỉnh như sau:</Form2Title>
      <BodyWrapper>
        <Form2User>
          <InfoCard title="Địa chỉ liên lạc" data={addressData} />
          <InfoCard title="Đạo luật FATCA" data={fatca} />
        </Form2User>
      </BodyWrapper>

      <ListItem list={confirmList} />
    </Form2Wrapper>
  );
}
