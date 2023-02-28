import React from "react";
import {
  Form6Wrapper,
  Form6Title,
  BodyWrapper,
  Form6User,
  InfoFrom6,
} from "./styled";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";

import { considerTime } from "pages/utils/listData";
import { confirmList } from "pages/utils/listData";
import { infoProductHelp } from "pages/utils/infoListData";

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
  );
}
