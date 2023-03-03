import {
  Form8Wrapper,
  Form8Title,
  BodyWrapper,
  Form8User,
  InfoFrom8,
} from "./styled";

import { policyData } from "utils/infoData";
import { infoProductHelp } from "utils/infoListData";
import Head from "next/head";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import InfoPDF from "../info-pdf";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";

interface DataProps {
  headingForm7: string[];
  contentForm7: string[][];
  headingForm5G: string[];
  contentForm8G: string[][];
  image?: string;
}

export default function Form8({
  headingForm7,
  contentForm7,
  headingForm5G,
  contentForm8G,
  image,
}: DataProps) {
  const imgPolicy = policyData.map((item) =>
    item.map((item1) => ({
      ...item1,
      label: image ?? item1.label,
    }))
  );
  return (
    <>
      <Head>
        <meta property="og:title" content="Kính gửi Quý khách Bùi Bích Diệp" />
        <meta property="og:url" content="https://fwd-cpr.bitelle.com/ivrweb/e-form/8?para"/>
        <meta
          property="og:description"
          content=" FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý khách cho hợp đồng bảo hiểm số 2345688"
        />
        <meta
          property="og:image"
          content={`${process.env.basePath}/images/logo.png`}
        />
      </Head>
      <InfoFrom8>
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
      </InfoFrom8>
      <Form8Wrapper>
        <Form8Title>Thông tin được yêu cầu điều chỉnh như sau:</Form8Title>
        <BodyWrapper>
          <Form8User>
            <TableOrange
              title="Hủy sản phẩm bổ trợ"
              heading={headingForm7}
              content={contentForm7}
            />
          </Form8User>
        </BodyWrapper>
        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form8User>
            <TableGray
              title="Sản phẩm không điều chỉnh"
              heading={headingForm5G}
              content={contentForm8G}
            />
          </Form8User>
        </BodyWrapper>

        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form8User>
            <InfoPDF title="Chứng từ đăng tải" data={imgPolicy} />
          </Form8User>
        </BodyWrapper>
      </Form8Wrapper>
    </>
  );
}
