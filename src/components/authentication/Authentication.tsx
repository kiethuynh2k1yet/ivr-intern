import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
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
import { Error } from "styles/global.styled";
export default function Authentication() {
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState("");
  const [identify, setIdentify] = useState("");
  const router = useRouter();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    if (date === "") {
      e.preventDefault();
      setErrorMessage("Lỗi ");
    } else {
      router.push(`/otp`);
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
            {errorMessage && <Error className="error"> {errorMessage} </Error>}
            <StyledLabel>Số CMND/CCCD/Hộ chiếu:</StyledLabel>
            <StyledInput
              type="text"
              placeholder="(9-12 ký tự liền nhau)"
              value={identify}
              onChange={(e) => setIdentify(e.target.value)}
            />
            {errorMessage && <Error className="error"> {errorMessage} </Error>}

            <ButtonContainer>
              <StyledButton>Tiếp tục</StyledButton>
            </ButtonContainer>
          </Infomation>
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
}
