import React from "react";
import {
  Container,
  ImgContainer,
  Wrapper,
  Detail,
  SubTitle,
  Title,
} from "./styled";
import Image from "next/image";
export default function Success() {
  return (
    <Container>
      <ImgContainer>
        <Image
          src="/ivrweb/images/smile.png"
          alt=""
          width={1013}
          height={584}
        />
      </ImgContainer>
      <Wrapper>
        <Title>QUÝ KHÁCH ĐÃ CHỌN QUÀ THÀNH CÔNG!</Title>
        <SubTitle>
          FWD kính chúc Quý khách và gia đình thật nhiều niềm vui và hạnh phúc!
        </SubTitle>
        <Detail>
          Trường hợp cần trao đổi thêm,
          <br /> Quý khách vui lòng liên hệ Tổng đài <br /> Dịch vụ Khách hàng
          1800 96 96 90 (miễn cước) hoặc qua hộp thư điện tử <br />
          CustomerConnect.vn@fwd.com
        </Detail>
      </Wrapper>
    </Container>
  );
}
