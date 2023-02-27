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
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import HealthCard from "../health-card";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";

import { considerTime1, confirmList } from "pages/utils/listData";
import InfoPDF from "../info-pdf";
import { policyData } from "pages/utils/infoData";
import { HealthCardData } from "pages/utils/healthData";
import { infoProductHelp } from "pages/utils/infoListData";

interface DataProps {
  headingForm6: string[];
  contentForm6: string[][];
  headingForm5G: string[];
  contentForm5G: string[][];
  healthQuestion: HealthCardData[];
  image?: string;
}
export default function Form7({
  headingForm6,
  contentForm6,
  headingForm5G,
  contentForm5G,
  healthQuestion,
  image,
}: DataProps) {
  const imgPolicy = policyData.map((item) =>
    item.map((item1) => ({
      ...item1,
      label: image ?? item1.label,
    }))
  );
  return (
    <>
      <InfoFrom7>
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
      </InfoFrom7>
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

        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form7User>
            <InfoPDF title="Chứng từ đăng tải" data={imgPolicy} />
          </Form7User>
        </BodyWrapper>

        <ListItemConsider list={considerTime1} />
        <ListItem list={confirmList} />
      </Form7Wrapper>
    </>
  );
}
