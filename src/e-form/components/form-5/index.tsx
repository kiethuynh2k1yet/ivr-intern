import React from "react";
import {
  Form5Wrapper,
  Form5Title,
  BodyWrapper,
  Form5User,
  InfoFrom5,
} from "./styled";
import { considerTime } from "pages/utils/listData";
import { confirmList } from "pages/utils/listData";
import { headingInsurance, shortContent } from "pages/utils/tableOrangeData";
import { contentInsurance } from "pages/utils/tableOrangeData";
import { healthQuestion } from "pages/utils/healthData";
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import TableOrange from "../table-orange";
import TableGray from "../table-gray";
import HealthCard from "../health-card";
import Info from "e-form/components/info";
import InfoCardContact from "../info-card-contact";
import { infoProductHelp } from "pages/utils/infoListData";
import { shortHeading } from "../../../pages/utils/tableOrangeData";
import { shortGrayHeading, shortGrayContent } from "pages/utils/tableGrayData";

export default function Form5() {
  return (
    <>
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
              heading={shortHeading}
              content={shortContent}
            />
          </Form5User>
        </BodyWrapper>
        <BodyWrapper style={{ marginTop: "20px" }}>
          <Form5User>
            <TableGray
              title="Sản phẩm không điều chỉnh"
              heading={shortGrayHeading}
              content={shortGrayContent}
            />
          </Form5User>
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
      </Form5Wrapper>
    </>
  );
}
