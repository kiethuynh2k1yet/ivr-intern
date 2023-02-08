import React, { useEffect, useState, useRef } from "react";
import { Error } from "styles/global.styled";
import { useRouter } from 'next/router';
import { RE_DIGIT } from './constants';
import {
  Container,
  InfoTitle,
  InputInfoTitle,
  Title,
  Info,
  InputOtp,
  DesOtp,
  DesOptminus,
  StyleBtn,
  Wrapper,
  InputInfoOtp
} from "./styles";

export default function Otp() {
  const [countdown, setCountdown] = useState(250);
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    if (otp === "") {
      e.preventDefault();
      setErrorMessage("Vui lòng nhập Otp");
    } else if (otp === "00000000"){
      setErrorMessage("Otp chưa chính xác. Vui lòng nhập lại");
    } else {
      router.push('/receive');
    }
  };

  useEffect(() => {
    const TimeId =
      countdown > 0 &&
      setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);

    return () => clearInterval(TimeId);
  }, [countdown]);

  return (
    <Container>
      <Wrapper>
        <Title>XÁC NHẬN THÔNG TIN</Title>
        <Info>
          <InfoTitle>Ngày tháng năm sinh của Bên mua bảo hiểm</InfoTitle>
          <InputInfoTitle type="text" value="12/10/1984" />
        </Info>
        <Info>
          <InfoTitle>Số CMND/CCCD/Passport</InfoTitle>
          <InputInfoTitle type="text" value="123456789" />
        </Info>
        <Info>
          <InfoTitle>
            Quý khách vui lòng nhập mã OTP đã được gửi đến số điện thoại
            097*****86
            <DesOptminus>Mã OTP sẽ có hiệu lực trong vòng 5 phút.</DesOptminus>
          </InfoTitle>
          <InputInfoOtp>
            <InputOtp
              type="text"
              placeholder=""
              maxLength={8}
  
              onChange={(e) => setOtp(e.target.value)}
            />
            {errorMessage && <Error className="error"> {errorMessage} </Error>}
          </InputInfoOtp>
          <DesOtp>Gửi lại mã OTP sau {countdown} giây</DesOtp>
        </Info>

        <StyleBtn onClick={onSubmit}>Tiếp tục</StyleBtn>
      </Wrapper>
    </Container>
  );
}
