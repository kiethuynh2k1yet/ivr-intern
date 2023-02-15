import InfoCard from "e-form/components/info-card/index";
import {
  fatca,
  infoData,
  documentData,
  jobData,
  contactData,
  policyData,
} from "infoData";
import InfoPDF from "../info-pdf";
import {
  BodyWrapper,
  Form1Title,
  Form1User,
  Form1Wrapper,
  ListContainer,
} from "./styled";

const Form1 = () => {
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
      <ListContainer>alo</ListContainer>
    </Form1Wrapper>
  );
};

export default Form1;
