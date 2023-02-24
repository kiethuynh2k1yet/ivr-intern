import React from "react";
import { Form5Wrapper, Form5Title, BodyWrapper, Form5User } from "./styled";

import { considerTime } from "pages/utils/listData";
import { confirmList } from "pages/utils/listData";
import { headingInsurance } from "pages/utils/tableData";
import { contentInsurance } from "pages/utils/tableData";
import { healthQuestion } from "pages/utils/healthData";

import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import HealthCard from "../health-card";

export default function Form5() {
  return (
    <Form5Wrapper>
      <Form5Title>Thông tin được yêu cầu điều chỉnh như sau:</Form5Title>
      <BodyWrapper>
        <Form5User>
          <TableOrange
            title="Hủy sản phẩm bổ trợ"
            heading={headingInsurance}
            content={contentInsurance}
          />
        </Form5User>
      </BodyWrapper>
      <BodyWrapper style={{ marginTop: "20px" }}>
        <Form5User>
          <TableGray
            title="Sản phẩm không điều chỉnh"
            heading={headingInsurance}
          />
        </Form5User>
      </BodyWrapper>
      <BodyWrapper style={{ marginTop: "20px" }}>
        <Form5User>
          <HealthCard
            title="Câu hỏi thông tin sức khỏe"
            data={healthQuestion}
          />
        </Form5User>
      </BodyWrapper>
      <ListItemConsider list={considerTime} />
      <ListItem list={confirmList} />
    </Form5Wrapper>
  );
}
