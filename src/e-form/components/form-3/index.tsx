import {
  Form3Wrapper,
  Form3Title,
  BodyWrapper,
  Form3User,
  InfoFrom3,
} from "./styled";
import InfoCard from "e-form/components/info-card/index";
import InfoPDF from "../info-pdf";
import { confirmList } from "utils/listData";
import { contractData } from "utils/contractData";
import { InfoCardData } from "utils/infoData";
import { infoDataUserAddress } from "utils/infoListData";
import InfoCardContact from "../info-card-contact";
import Info from "../info";
import ListItem from "../list-item";
import NoteForm from "../note";
import Contract from "../contract";
interface DataProps {
  addressData: InfoCardData[][];
  fatca: InfoCardData[][];
  policyData: InfoCardData[][];
  image?: string;
}

export default function Form3({
  addressData,
  fatca,
  policyData,
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
      <InfoFrom3>
        <Info
          dataUser={{
            fullname: "Bùi Bích Diệp",
            code: "2345688",
          }}
        />
        <InfoCardContact
          title="Yêu cầu điều chỉnh địa chỉ liên lạc"
          data={infoDataUserAddress}
        />
      </InfoFrom3>
      <Form3Wrapper>
        <Form3Title>Thông tin được yêu cầu điều chỉnh như sau:</Form3Title>
        <BodyWrapper>
          <Form3User>
            <InfoCard title="Địa chỉ liên lạc" data={addressData} />
            <InfoCard title="Đạo luật FATCA" data={fatca} />
          </Form3User>
          <Form3User>
            <InfoPDF title="Chứng từ đăng tải" data={imgPolicy} />
          </Form3User>
          <Contract
            title="Các điều chỉnh trên sẽ được áp dụng cho các hợp đồng sau:"
            body={contractData}
          />
        </BodyWrapper>
        <ListItem list={confirmList} />
      </Form3Wrapper>
      <NoteForm />
    </>
  );
}
