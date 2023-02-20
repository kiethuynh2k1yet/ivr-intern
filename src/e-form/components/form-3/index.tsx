import React from "react";
import { Form3Wrapper, Form3Title, BodyWrapper, Form3User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import InfoAddress from "../info-address";
import { confirmList } from "listData";
import { contractData } from "contractData";
import ListItem from "../list-item";
import NoteForm from "../note";
import Contract from "../contract";
import InfoPDF from "../info-pdf";
import { InfoCardData } from "infoData";

interface DataProps {
  addressData: InfoCardData[][];
  fatca: InfoCardData[][];
  policyData: InfoCardData[][];
}

export default function Form3({ addressData, fatca, policyData }: DataProps) {
  return (
    <>
      <InfoAddress
        data={{
          fullname: "Bùi Bích Diệp",
          date: "22/01/2023",
          request: "FWD20230110R0054",
          code: "2345688",
        }}
      />
      <Form3Wrapper>
        <Form3Title>Thông tin được yêu cầu điều chỉnh như sau:</Form3Title>
        <BodyWrapper>
          <Form3User>
            <InfoCard title="Địa chỉ liên lạc" data={addressData} />
            <InfoCard title="Đạo luật FATCA" data={fatca} />
          </Form3User>
          {/* <Form3User>
            <InfoPDF title="Chứng từ đăng tải" data={policyData} />
          </Form3User> */}
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
