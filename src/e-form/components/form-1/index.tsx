import InfoCard from "e-form/components/info-card/index";
import InfoPersonal from "e-form/components/info-personal/index";
import InfoPDF from "../info-pdf";
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
  image?: string;
}

const Form1 = ({
  infoData,
  fatca,
  documentData,
  jobData,
  policyData,
  contactData,
  image,
}: InfoCard) => {
  const imgPolicy = policyData.map((item) =>
    item.map((item1) => ({
      ...item1,
      label: image ?? item1.label,
    }))
  );

  return (
    <>
      <InfoPersonal
        data={{
          fullname: "Bùi Bích Diệp",
          date: "22/01/2023",
          request: "FWD20230110R0054",
          code: "2345688",
        }}
      />
      <Form1Wrapper>
        <Form1Title>Thông tin được yêu cầu điều chỉnh như sau:</Form1Title>
        <BodyWrapper>
          <Form1User>
            <InfoCard title="Thông tin cá nhân" data={infoData} />
            <InfoCard title="Đạo luật FATCA" data={fatca} />
          </Form1User>
          <Form1User>
            <InfoCard title="Thông tin chứng từ" data={documentData} />
            <InfoPDF title="Chứng từ đăng tải" data={imgPolicy} />
          </Form1User>
          <Form1User>
            <InfoCard title="Thông tin nghề nghiệp" data={jobData} />
            <InfoCard title="Thông tin liên lạc" data={contactData} />
          </Form1User>
        </BodyWrapper>

        <ListItem list={updateList} />
        <ListItem list={confirmList} />
      </Form1Wrapper>
    </>
  );
};

export default Form1;
