import React from "react";
import { Form2Wrapper, Form2Title, BodyWrapper, Form2User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import InfoAddress from "../info-address";
import ListItem from "../list-item";
import { confirmList } from "pages/utils/listData";
import { contractData } from "pages/utils/contractData";
import Contract from "../contract";
import { InfoCardData } from "pages/utils/infoData";

interface DataProps {
  addressData: InfoCardData[][];
  fatca: InfoCardData[][];
}
export default function Form2({ addressData, fatca }: DataProps) {
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
      <Form2Wrapper>
        <Form2Title>Thông tin được yêu cầu điều chỉnh như sau:</Form2Title>
        <BodyWrapper>
          <Form2User>
            <InfoCard title="Địa chỉ liên lạc" data={addressData} />
            <InfoCard title="Đạo luật FATCA" data={fatca} />
          </Form2User>
          <Contract
            title="Các điều chỉnh trên sẽ được áp dụng cho các hợp đồng sau:"
            body={contractData}
          />
        </BodyWrapper>

        <ListItem list={confirmList} />
      </Form2Wrapper>
    </>
  );
}
