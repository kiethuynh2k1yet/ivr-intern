import {
  Form2Wrapper,
  Form2Title,
  BodyWrapper,
  Form2User,
  InfoFrom2,
} from "./styled";
import Head from "next/head";
import { confirmList } from "utils/listData";
import { contractData } from "utils/contractData";
import { InfoCardData } from "utils/infoData";
import { infoDataUserAddress } from "utils/infoListData";
import InfoCardContact from "../info-card-contact";
import Info from "../info";
import InfoCard from "e-form/components/info-card/index";
import Contract from "../contract";
import ListItem from "../list-item";

interface DataProps {
  addressData: InfoCardData[][];
  fatca: InfoCardData[][];
}
export default function Form2({ addressData, fatca }: DataProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Kính gửi Quý khách Bùi Bích Diệp" />
        <meta
          property="og:description"
          content=" FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý khách cho hợp đồng bảo hiểm số 2345688"
        />
        <meta
          property="og:image"
          content={`${process.env.basePath}/images/logo.png`}
        />
      </Head>
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
