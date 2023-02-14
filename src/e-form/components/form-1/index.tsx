import React from "react";
import {
  Form1Wrapper,
  Title,
  Infomation,
  InfomationDetail,
  InfomationTitle,
  ListContainer,
  List,
  StyledUL,
  StyledLi,
  TitleLi,
  StyledSpan,
} from "./styled";
import InfoCard from "e-form/components/infocard/index";
import { infoData, FATCA, documentData, policyData, jobData } from "infoData";

const Form1 = () => {
  return (
    <Form1Wrapper>
      <Title>Thông tin được yêu cầu điều chỉnh như sau:</Title>
      <Infomation>
        <InfomationDetail>
          <InfomationTitle>Thông tin cá nhân</InfomationTitle>
          <InfoCard data={infoData} />
        </InfomationDetail>
        <InfomationDetail>
          <InfomationTitle>Đạo luật FATCA</InfomationTitle>
          <InfoCard data={FATCA} />
        </InfomationDetail>

        <InfomationDetail>
          <InfomationTitle>Thông tin chứng từ</InfomationTitle>
          <InfoCard data={documentData} />
        </InfomationDetail>

        <InfomationDetail>
          <InfomationTitle>Chứng chỉ đăng tải</InfomationTitle>
          <InfoCard data={policyData} />
        </InfomationDetail>

        <InfomationDetail>
          <InfomationTitle>Thông tin nghề nghiệp</InfomationTitle>
          <InfoCard data={jobData} />
        </InfomationDetail>

        <InfomationDetail>
          <InfomationTitle>Thông tin liên hệ</InfomationTitle>
          <InfoCard data={jobData} />
        </InfomationDetail>

        <ListContainer>
          <List>
            <TitleLi>Xin lưu ý cùng Quý khách:</TitleLi>
            <StyledUL>
              <StyledLi>
                Việc cập nhật/thay đổi Ngày tháng năm sinh hoặc Giới tính có thể
                dẫn đến thay đổi phí bảo hiểm. Thông tin chi tiết sẽ được thông
                báo đến Quý khách
              </StyledLi>
              <StyledLi>
                Trong trường hợp Quý khách thay đổi số điện thoại di động, chúng
                tôi sẽ liên hệ với Quý khách trước khi thực hiện yêu cầu này.
              </StyledLi>
              <StyledLi>
                Yêu cầu điều chỉnh của Quý khách sẽ có hiệu lực kể từ ngày được
                FWD xác nhận bằng văn bản/email.
              </StyledLi>
              <StyledLi>
                Thư xác nhận sẽ được FWD gửi qua email/địa chỉ liên lạc của Quý
                khách đã đăng ký với Công ty.
              </StyledLi>
            </StyledUL>
          </List>
          <List>
            <TitleLi>
              Quý khách đã xác nhận thông tin phiếu yêu cầu bằng mã xác thực một
              lần <StyledSpan>(OTP)</StyledSpan> vào lúc
              <StyledSpan> 22:00 22/01/2023</StyledSpan> như sau:
            </TitleLi>

            <StyledUL>
              <StyledLi>
                Tôi xác nhận các thông tin điều chỉnh nói trên. Tôi đồng ý giao
                dịch điều chỉnh dưới xác thực Bên mua bảo hiểm của tôi là cơ sở
                để FWD Việt Nam xử lý các giao dịch/yêu cầu của tôi,
              </StyledLi>
              <StyledLi>
                Mã xác thực một lần (OTP) sẽ được gửi đến số điện thoại của Bên
                mua bảo hiểm. Bằng việc xác thực mã OTP này, Bên mua bảo hiểm
                xác nhận tính trung thực, chính xác và đầy đủ của các thông tin
                đã cung cấp trong yêu cầu điều chỉnh thông tin này.,
              </StyledLi>
            </StyledUL>
          </List>
        </ListContainer>
      </Infomation>
    </Form1Wrapper>
  );
};

export default Form1;
