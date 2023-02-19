import InfoCard from "e-form/components/info-card/index";

import { updateList, confirmList } from "listData";
import InfoPDF from "../info-pdf";
import ListItem from "../list-item";
import { BodyWrapper, Form1Title, Form1User, Form1Wrapper } from "./styled";
import { infoData } from "infoData";
import { contactData } from "./../../../infoData";

interface DataProps {
  infoData: {};
  fatca: {};
  documentData: {};
  policyData: {};
  jobData: {};
  contactData: {};
}
const Form1 = ({
  infoData,
  fatca,
  documentData,
  policyData,
  jobData,
  contactData,
}: DataProps) => {
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
          {/* <InfoPDF title="Chứng từ đăng tải" data={policyData} /> */}
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
