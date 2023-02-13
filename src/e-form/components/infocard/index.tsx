import React from "react";
import {
  Container,
  Wrapper,
  InfoWrapper,
  InfoTitle,
  InfoDetail,
} from "./styled";
export default function index() {
  return (
    <Container>
      <Wrapper>
        <InfoWrapper>
          <InfoTitle>Họ tên</InfoTitle>
          <InfoDetail>Bùi Bích Diệp</InfoDetail>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Giới tính</InfoTitle>
          <InfoDetail>Nữ</InfoDetail>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Tình trạng hôn nhân</InfoTitle>
          <InfoDetail>Kết hôn</InfoDetail>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Ngày sinh</InfoTitle>
          <InfoDetail>12/12/1992</InfoDetail>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Nơi sinh</InfoTitle>
          <InfoDetail>Hà Nội</InfoDetail>
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
}
