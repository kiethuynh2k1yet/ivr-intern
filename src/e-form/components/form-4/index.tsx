import React from "react";
import { Form4Wrapper, BodyWrapper, Form4User, InfoFrom4 } from "./styled";
import { confirmList, considerTime } from "utils/listData";
import { infoPayment } from "utils/infoListData";
import { InfoCardData } from "utils/infoData";

import InfoCard from "e-form/components/info-card/index";
import ListItem from "../list-item";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";
import ListItemConsider from "../list-item-consider";
import Head from "next/head";

interface DataProps {
  periodicFeeData: InfoCardData[][];
}

export default function Form4({ periodicFeeData }: DataProps) {
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
      <InfoFrom4>
        <Info
          dataUser={{
            fullname: "Bùi Bích Diệp",
            code: "2345688",
          }}
        />
        <InfoCardContact
          title="Yêu cầu điều chỉnh thông tin cá nhân"
          data={infoPayment}
        />
      </InfoFrom4>
      <Form4Wrapper>
        <BodyWrapper>
          <Form4User>
            <InfoCard title="Định kỳ đóng phí" data={periodicFeeData} />
          </Form4User>
        </BodyWrapper>
        <ListItemConsider list={considerTime} />
        <ListItem list={confirmList} />
      </Form4Wrapper>
    </>
  );
}
