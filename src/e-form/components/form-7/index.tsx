import React from "react";
import {
  Form7Wrapper,
  Form7Title,
  BodyWrapper,
  Form7User,
  InfoFrom7,
} from "./styled";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";

import HealthCard from "../health-card";

import { considerTime1, confirmList } from "pages/utils/listData";
import { headingForm6, contentForm6 } from "pages/utils/tableOrangeData";
import { headingForm5G, contentForm5G } from "pages/utils/tableGrayData";
import { healthQuestion } from "pages/utils/healthData";
import InfoPDF from "../info-pdf";
import { policyData } from "pages/utils/infoData";

interface DataProps {
  headingForm6: string[];
  contentForm6: string[][];
  headingForm5G: string[];
  contentForm5G: string[][];
  healthQuestion: HealthCardData[];
  image?: string;
  logo?: string;
}
export default function Form7({
  headingForm6,
  contentForm6,
  headingForm5G,
  contentForm5G,
  healthQuestion,
  image,
  logo,
}: DataProps) {
  return (
    <Form7Wrapper>
      <Form7Title>Thông tin được yêu cầu điều chỉnh như sau:</Form7Title>
      <BodyWrapper>
        <Form7User>
          <TableOrange
            title="Hủy sản phẩm bổ trợ"
            heading={headingForm6}
            content={contentForm6}
          />
        </Form7User>
      </BodyWrapper>
      <BodyWrapper style={{ marginTop: "20px" }}>
        <Form7User>
          <TableGray
            title="Sản phẩm không điều chỉnh"
            heading={headingForm5G}
            content={contentForm5G}
          />
        </Form7User>
      </BodyWrapper>
      <BodyWrapper style={{ marginTop: "20px" }}>
        <Form7User>
          <HealthCard
            title="Câu hỏi thông tin sức khỏe"
            data={healthQuestion}
          />
        </Form7User>
      </BodyWrapper>

      {/* <BodyWrapper style={{ marginTop: "20px" }}>
        <Form7User>
          <InfoPDF title="Chứng từ đăng tải" data={policyData} />
        </Form7User>
      </BodyWrapper> */}

      <ListItemConsider list={considerTime1} />
      <ListItem list={confirmList} />
    </Form7Wrapper>
  );
}
