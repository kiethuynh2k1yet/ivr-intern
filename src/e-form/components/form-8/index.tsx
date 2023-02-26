import React from "react";
import { Form8Wrapper, Form8Title, BodyWrapper, Form8User } from "./styled";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import InfoPDF from "../info-pdf";

import { considerTime1, confirmList } from "pages/utils/listData";
import { headingForm7, contentForm7 } from "pages/utils/tableOrangeData";
import { headingForm5G, contentForm8G } from "pages/utils/tableGrayData";
import { policyData } from "pages/utils/infoData";
export default function Form8() {
  return (
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
          <InfoPDF title="Chứng từ đăng tải" data={policyData} />
        </Form8User>
      </BodyWrapper>

      <ListItemConsider list={considerTime1} />
      <ListItem list={confirmList} />
    </Form8Wrapper>
  );
}
