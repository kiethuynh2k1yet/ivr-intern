import InfoCard from "e-form/components/info-card/index";
import InfoPDF from "e-form/components/info-pdf/index";

import { updateList, confirmList } from "listData";
import ListItem from "../list-item";
import { BodyWrapper, Form1Title, Form1User, Form1Wrapper } from "./styled";
import { InfoCardData } from "infoData";

interface InfoCard {
  infoData: InfoCardData[][];
  fatca: InfoCardData[][];
  documentData: InfoCardData[][];
  jobData: InfoCardData[][];
  contactData: InfoCardData[][];
  policyData: InfoCardData[][];
}

const Form1 = ({
  infoData,
  fatca,
  documentData,
  jobData,
  policyData,
  contactData,
}: InfoCard) => {
  return (
    <Form1Wrapper>
      <Form1Title>Thông tin được yêu cầu điều chỉnh như sau:</Form1Title>
      <BodyWrapper>
        <Form1User>
          <InfoCard title="Thông tin cá nhân" data={infoData} />
          <InfoCard title="Đạo luật FATCA" data={fatca} />
        </Form1User>
        <Form1User>
          <InfoCard title="Thông tin chứng từ" data={documentData} />
          <InfoPDF title="Chứng từ đăng tải" data={policyData} />
        </Form1User>
        <Form1User>
          <InfoCard title="Thông tin nghề nghiệp" data={jobData} />
          <InfoCard title="Thông tin liên lạc" data={contactData} />
        </Form1User>
      </BodyWrapper>

      <ListItem list={updateList} />
      <ListItem list={confirmList} />
    </Form1Wrapper>
  );
};

export default Form1;
