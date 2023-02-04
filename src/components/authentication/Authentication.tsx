import React, { useState, useRef } from "react";
import {
  Container,
  Title,
  Wrapper,
  NotiFill,
  Infomation,
  StyledLabel,
  StyledInput,
  Demo,
  StyledButton,
  WrapperInfo,
  ButtonContainer,
} from "./styled";
export default function Authentication() {
  const date = useRef("");
  const identify = useRef(" ");
  const handleClick = () => {
    console.log("alo");
  };
  return (
    <Container>
      <Title>Thông tin của Quý khách </Title>
      <Wrapper>
        <NotiFill>Quý khách vui lòng nhập thông tin sau đây:</NotiFill>
        <WrapperInfo>
          <Infomation onSubmit={handleClick}>
            <StyledLabel>Ngày tháng năm sinh:</StyledLabel>
            <StyledInput
              type="text"
              placeholder="Vui lòng nhập"
              required
              ref={date}
            />
            <Demo>Minh họa: 29/01/2019</Demo>

            <StyledLabel>Số CMND/CCCD/Hộ chiếu:</StyledLabel>
            <StyledInput
              type="text"
              placeholder="(9-12 ký tự liền nhau)"
              required
              ref={identify}
            />
          </Infomation>
        </WrapperInfo>
        <ButtonContainer>
          <StyledButton>Tiếp tục</StyledButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}
