import {
  Form7Wrapper,
  Form7Title,
  BodyWrapper,
  Form7User,
  InfoFrom7,
} from "./styled";

import { HealthCardData } from "utils/healthData";
import { infoProductHelp } from "utils/infoListData";
import Head from "next/head";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import HealthCard from "../health-card";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";

interface DataProps {
  headingForm6: string[];
  contentForm6: string[][];
  headingForm5G: string[];
  contentForm5G: string[][];
  healthQuestion: HealthCardData[];
  image?: string;
  logo?: string;
}
export default function Form7({
  headingForm6,
  contentForm6,
  headingForm5G,
  contentForm5G,
  healthQuestion,
  image,
  logo,
}: DataProps) {
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
      <InfoFrom7>
        <Info
          dataUser={{
            fullname: "Bùi Bích Diệp",
            code: "2345688",
          }}
        />
        <InfoCardContact
          title="Yêu cầu điều chỉnh thông tin cá nhân"
          data={infoProductHelp}
        />
      </InfoFrom7>
      <Form7Wrapper>
        <Form7Title>Thông tin được yêu cầu điều chỉnh như sau:</Form7Title>
        <BodyWrapper>
          <Form7User>
            <TableOrange
              title="Sản phẩm bảo hiểm sau khi điều chỉnh"
              heading={headingForm6}
              content={contentForm6}
            />
          </Form7User>
        </BodyWrapper>
        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form7User>
            <TableGray
              title="Sản phẩm không điều chỉnh"
              heading={headingForm5G}
              content={contentForm5G}
            />
          </Form7User>
        </BodyWrapper>
        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form7User>
            <HealthCard
              title="Câu hỏi thông tin sức khỏe"
              data={healthQuestion}
            />
          </Form7User>
        </BodyWrapper>
      </Form7Wrapper>
    </>
  );
}
