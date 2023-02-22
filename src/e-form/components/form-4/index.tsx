import React from "react";
import { Form4Wrapper, Form4Title, BodyWrapper, Form4User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import { periodicFeeData } from "pages/utils/infoData";
import { considerTime } from "pages/utils/listData";
import { confirmList } from "pages/utils/listData";

import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
export default function Form4() {
  return (
    <Form4Wrapper>
      <BodyWrapper>
        <Form4User>
          <InfoCard title="Định kỳ đóng phí" data={periodicFeeData} />
        </Form4User>
      </BodyWrapper>
      <ListItemConsider list={considerTime} />
      <ListItem list={confirmList} />
    </Form4Wrapper>
  );
}
