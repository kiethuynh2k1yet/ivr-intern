import React from "react";
import {
  Form1Wrapper,
  Title,
  Infomation,
  List,
  InfomationDetail,
  InfomationTitle,
} from "./styled";
import InfoCard from "e-form/components/infocard/index";

interface Form1Props {
  data: {
    fullname: string;
    gender: string;
    maried: string;
    dob: string;
    birthPlace: string;
  };
}

const Form1 = ({ data }: Form1Props) => {
  return (
    <Form1Wrapper>
      <Title>Thông tin được yêu cầu điều chỉnh như sau:</Title>
      <Infomation>
        <InfomationDetail>
          <InfomationTitle>Thông tin cá nhân</InfomationTitle>
          <InfoCard />
        </InfomationDetail>
        <InfomationDetail>
          <InfomationTitle>Thông tin cá nhân</InfomationTitle>
          <InfoCard />
        </InfomationDetail>
        <InfomationDetail>
          <InfomationTitle>Thông tin cá nhân</InfomationTitle>
          <InfoCard />
        </InfomationDetail>
        <InfomationDetail>
          <InfomationTitle>Thông tin cá nhân</InfomationTitle>
          <InfoCard />
        </InfomationDetail>
        <InfomationDetail>
          <InfomationTitle>Thông tin cá nhân</InfomationTitle>
          <InfoCard />
        </InfomationDetail>
        <InfomationDetail>
          <InfomationTitle>Thông tin cá nhân</InfomationTitle>
          <InfoCard />
        </InfomationDetail>
      </Infomation>
      <List>
        <ul>
          Xin lưu ý cùng Quý khách
          <li>
            Việc cập nhật/thay đổi Ngày tháng năm sinh hoặc Giới tính có thể dẫn
            đến thay đổi phí bảo hiểm. Thông tin chi tiết sẽ được thông báo đến
            Quý khách
          </li>
          <li>
            Trong trường hợp Quý khách thay đổi số điện thoại di động, chúng tôi
            sẽ liên hệ với Quý khách trước khi thực hiện yêu cầu này.
          </li>
          <li>
            Yêu cầu điều chỉnh của Quý khách sẽ có hiệu lực kể từ ngày được FWD
            xác nhận bằng văn bản/email.
          </li>
          <li>
            Thư xác nhận sẽ được FWD gửi qua email/địa chỉ liên lạc của Quý
            khách đã đăng ký với Công ty.
          </li>
        </ul>
      </List>
      <List>
        <ul>
          <li></li>
        </ul>
      </List>
    </Form1Wrapper>
  );
};

export default Form1;
