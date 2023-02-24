import React from "react";
import {
  Form2Wrapper,
  Form2Title,
  BodyWrapper,
  Form2User,
  InfoFrom2,
} from "./styled";
import InfoCard from "e-form/components/info-card/index";
import ListItem from "../list-item";
import { confirmList } from "pages/utils/listData";
import { contractData } from "pages/utils/contractData";
import Contract from "../contract";
import { InfoCardData } from "pages/utils/infoData";
import { infoDataUserAddress } from "pages/utils/infoListData";
import InfoCardContact from "../info-card-contact";
import Info from "../info";

interface DataProps {
  addressData: InfoCardData[][];
  fatca: InfoCardData[][];
}
export default function Form2({ addressData, fatca }: DataProps) {
  return (
    <>
      <InfoFrom2>
        <Info
          dataUser={{
            fullname: "Bùi Bích Diệp",
            code: "2345688",
          }}
        />
        <InfoCardContact
          title="Yêu cầu điều chỉnh địa chỉ liên lạc"
          data={infoDataUserAddress}
        />
      </InfoFrom2>
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
