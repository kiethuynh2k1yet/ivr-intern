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
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState("");
  const [identify, setIdentify] = useState("");
  const handleClick = (e) => {
    if (date === "") {
      e.preventDefault();
      setErrorMessage("Lỗi");
    }
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Demo>Minh họa: 29/01/2019</Demo>
            {errorMessage && <p className="error"> {errorMessage} </p>}
            <StyledLabel>Số CMND/CCCD/Hộ chiếu:</StyledLabel>
            <StyledInput
              type="text"
              placeholder="(9-12 ký tự liền nhau)"
              value={identify}
              onChange={(e) => setIdentify(e.target.value)}
            />
            {errorMessage && <p className="error"> {errorMessage} </p>}

            <ButtonContainer>
              <StyledButton>Tiếp tục</StyledButton>
            </ButtonContainer>
          </Infomation>
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
}
