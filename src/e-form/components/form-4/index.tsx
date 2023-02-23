import React from "react";
import { Form4Wrapper, Form4Title, BodyWrapper, Form4User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import { periodicFeeData } from "pages/utils/infoData";
import { confirmList } from "pages/utils/listData";
import ListItem from "../list-item";
import Info from "e-form/components/info";
export default function Form4() {
  return (
    <>
      <Info
        dataUser={{
          fullname: "Bùi Bích Diệp",
          code: "2345688",
        }}
      />
      <Form4Wrapper>
        <BodyWrapper>
          <Form4User>
            <InfoCard title="Định kỳ đóng phí" data={periodicFeeData} />
          </Form4User>
        </BodyWrapper>
        <ListItem list={confirmList} />
      </Form4Wrapper>
    </>
  );
}
