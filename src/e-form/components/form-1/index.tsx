import {
  InfoFrom1,
  BodyWrapper,
  Form1Title,
  Form1User,
  Form1Wrapper,
} from "./styled";
import InfoCard from "e-form/components/info-card/index";
import InfoPDF from "../info-pdf";
import { updateList, confirmList } from "utils/listData";
import { infoDataUser } from "utils/infoListData";
import ListItem from "../list-item";
import { InfoCardData } from "utils/infoData";
import InfoCardContact from "../info-card-contact";
import Info from "../info";
import Head from "next/head";

interface InfoCard {
  infoData: InfoCardData[][];
  fatca: InfoCardData[][];
  documentData: InfoCardData[][];
  jobData: InfoCardData[][];
  contactData: InfoCardData[][];
  policyData: InfoCardData[][];
  image?: string;
}

const Form1 = ({
  infoData,
  fatca,
  documentData,
  jobData,
  policyData,
  contactData,
  image,
}: InfoCard) => {
  const imgPolicy = policyData.map((item) =>
    item.map((item1) => ({
      ...item1,
      label: image ?? item1.label,
    }))
  );

  return (
    <>
      <Head>
        {/* <title>Kính gửi Quý khách Bùi Bích Diệp</title> */}
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
      <InfoFrom1>
        <Info
          dataUser={{
            fullname: "Bùi Bích Diệp",
            code: "2345688",
          }}
        />
        <InfoCardContact
          title="Yêu cầu điều chỉnh thông tin cá nhân"
          data={infoDataUser}
        />
      </InfoFrom1>
      <Form1Wrapper>
        <Form1Title>Thông tin được yêu cầu điều chỉnh như sau:</Form1Title>
        <BodyWrapper>
          <Form1User>
            <InfoCard title="Thông tin cá nhân" data={infoData} />
            <InfoCard title="Đạo luật FATCA" data={fatca} />
          </Form1User>
          <Form1User>
            <InfoCard title="Thông tin chứng từ" data={documentData} />
            <InfoPDF title="Chứng từ đăng tải" data={imgPolicy} />
          </Form1User>
          <Form1User>
            <InfoCard title="Thông tin nghề nghiệp" data={jobData} />
            <InfoCard title="Thông tin liên lạc" data={contactData} />
          </Form1User>
        </BodyWrapper>
        <ListItem list={updateList} />
        <ListItem list={confirmList} />
      </Form1Wrapper>
    </>
  );
};

export default Form1;
