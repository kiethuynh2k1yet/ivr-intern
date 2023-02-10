import React from "react";
import {
  Container,
  ImgContainer,
  DescContainer,
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
          src={`${process.env.basePath}/images/smile.png`}
          alt=""
          width={1013}
          height={584}
        />
      </ImgContainer>
      <DescContainer>
        <Title>QUÝ KHÁCH ĐÃ CHỌN QUÀ THÀNH CÔNG!</Title>
        <SubTitle>
          FWD kính chúc Quý khách và gia đình thật nhiều niềm vui và hạnh phúc!
        </SubTitle>
        <Detail>
          Trường hợp cần trao đổi thêm, Quý khách vui lòng liên hệ Tổng đài Dịch
          vụ Khách hàng 1800 96 96 90 (miễn cước) hoặc qua hộp thư điện tử
        </Detail>
      </DescContainer>
    </Container>
  );
}
