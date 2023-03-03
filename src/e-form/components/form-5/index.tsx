import React from "react";
import {
  Form5Wrapper,
  Form5Title,
  BodyWrapper,
  Form5User,
  InfoFrom5,
} from "./styled";
import { considerUpdate } from "utils/listData";
import { confirmList } from "utils/listData";
import { infoProductHelp } from "utils/infoListData";
import Head from "next/head";
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";

interface DataProps {
  headingForm5: string[];
  contentForm5: string[][];
  headingForm5G: string[];
  contentForm5G: string[][];
}
export default function Form5({
  headingForm5,
  contentForm5,
  headingForm5G,
  contentForm5G,
}: DataProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Kính gửi Quý khách Bùi Bích Diệp" />
        <meta property="og:url" content="https://fwd-cpr.bitelle.com/ivrweb/e-form/5?para"/>
        <meta
          property="og:description"
          content=" FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý khách cho hợp đồng bảo hiểm số 2345688"
        />
        <meta
          property="og:image"
          content={`${process.env.basePath}/images/logo.png`}
        />
      </Head>
      <InfoFrom5>
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
      </InfoFrom5>
      <Form5Wrapper>
        <Form5Title>Thông tin được yêu cầu điều chỉnh như sau:</Form5Title>
        <BodyWrapper>
          <Form5User>
            <TableOrange
              title="Hủy sản phẩm bổ trợ"
              heading={headingForm5}
              content={contentForm5}
            />
          </Form5User>
        </BodyWrapper>
        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form5User>
            <TableGray
              title="Sản phẩm không điều chỉnh"
              heading={headingForm5G}
              content={contentForm5G}
            />
          </Form5User>
        </BodyWrapper>

        <ListItemConsider list={considerUpdate} />
        <ListItem list={confirmList} />
      </Form5Wrapper>
    </>
  );
}
