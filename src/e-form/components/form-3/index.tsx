import React from "react";
import { Form3Wrapper, Form3Title, BodyWrapper, Form3User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import { fatca, policyData, addressData } from "infoData";
import { confirmList } from "listData";
import { contractData } from "contractData";
import ListItem from "../list-item";
import NoteForm from "../note";
import Contract from "../contract";
import InfoPDF from "../info-pdf";

export default function Form3() {
  return (
    <>
      <Form3Wrapper>
        <Form3Title>Thông tin được yêu cầu điều chỉnh như sau:</Form3Title>
        <BodyWrapper>
          <Form3User>
            <InfoCard title="Địa chỉ liên lạc" data={addressData} />
            <InfoCard title="Đạo luật FATCA" data={fatca} />
          </Form3User>
          <Form3User>
            <InfoPDF title="Chứng từ đăng tải" data={policyData} />
          </Form3User>
          <Contract
            title="Các điều chỉnh trên sẽ được áp dụng cho các hợp đồng sau:"
            body={contractData}
          />
        </BodyWrapper>
        <ListItem list={confirmList} />
      </Form3Wrapper>
      <NoteForm />
    </>
  );
}
