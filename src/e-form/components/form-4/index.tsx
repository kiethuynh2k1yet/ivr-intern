import React from "react";
import { Form4Wrapper, BodyWrapper, Form4User, InfoFrom4 } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import { confirmList, considerTime } from "pages/utils/listData";
import ListItem from "../list-item";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";
import { infoPayment } from "pages/utils/infoListData";
import ListItemConsider from "../list-item-consider";
import { InfoCardData } from "pages/utils/infoData";

interface DataProps {
  periodicFeeData: InfoCardData[][];
}

export default function Form4({ periodicFeeData }: DataProps) {
  return (
    <>
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
