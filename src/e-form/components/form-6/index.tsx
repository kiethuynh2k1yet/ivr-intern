import React from "react";
import {
  Form6Wrapper,
  Form6Title,
  BodyWrapper,
  Form6User,
  InfoFrom6,
} from "./styled";

import { infoProductHelp } from "utils/infoListData";
import { considerTime } from "utils/listData";
import { confirmList } from "utils/listData";
import Head from "next/head";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";
interface DataProps {
  headingForm6: string[];
  contentForm6: string[][];
  headingForm5G: string[];
  contentForm5G: string[][];
}

export default function Form6({
  headingForm6,
  contentForm6,
  headingForm5G,
  contentForm5G,
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
      <InfoFrom6>
        <Info
          dataUser={{
            fullname: "Bùi Bích Diệp",
            code: "2345688",
          }}
        />
        <InfoCardContact
          title="Yêu cầu huỷ bỏ sản phẩm bổ trợ"
          data={infoProductHelp}
        />
      </InfoFrom6>
      <Form6Wrapper>
        <Form6Title>Thông tin được yêu cầu điều chỉnh như sau:</Form6Title>
        <BodyWrapper>
          <Form6User>
            <TableOrange
              title="Hủy sản phẩm bổ trợ"
              heading={headingForm6}
              content={contentForm6}
            />
          </Form6User>
        </BodyWrapper>
        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form6User>
            <TableGray
              title="Sản phẩm không điều chỉnh"
              heading={headingForm5G}
              content={contentForm5G}
            />
          </Form6User>
        </BodyWrapper>
        {/* <BodyWrapper style={{ marginTop: "20px" }}>
    <Form5User>
      <HealthCard
        title="Câu hỏi thông tin sức khỏe"
        data={healthQuestion}
      />
    </Form5User>
  </BodyWrapper> */}
        <ListItemConsider list={considerTime} />
        <ListItem list={confirmList} />
      </Form6Wrapper>
    </>
  );
}
