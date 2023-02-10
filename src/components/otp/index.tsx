import React, { useEffect, useState, useRef } from "react";
import { Error } from "styles/global.styled";
import { useRouter } from 'next/router';
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
  InputInfoOtp,
  DesOtpError
} from "./styles";

export default function Otp() {
  const [countdown, setCountdown] = useState(10);
  const [formValues, setFormValues] = useState({ otp: ""});
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (error.includes(name)) {
      setError(error.filter((e) => e !== name));
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.otp) {
      errors.otp = "Vui lòng nhập Otp";
    } else if(values.otp) {
      errors.otp = "OTP chưa chính xác. Vui lòng nhập lại";
    }
    return errors;
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorList = [];
    if (!formValues.otp ){
      errorList.push("otp");
    }
    if (formValues.otp !== "11111111") {
      errorList.push("otp");
    }
    else {
      router.push(`/receive`);
    }
    setFormErrors(validate(formValues));
    setError(errorList);
  };

  useEffect(() => {
    const TimeId =
      countdown > 0 &&
      setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);

    return () => clearInterval(TimeId);
  }, [countdown]);

  const resendOTP = () => {
    setCountdown(250);
  };

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit} >
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
              name="otp"
              placeholder=""
              maxLength={8}
              value={formValues.otp}
              onChange={handleChange}
              className={error.includes("otp") ? "errorOtp" : ""}     
            />
            <Error>{formErrors.otp}</Error>
          </InputInfoOtp>
          {countdown > 0 ? (
            <DesOtp>Gửi lại mã OTP sau {countdown} giây</DesOtp>
          ):(
            <DesOtpError onClick={resendOTP}>Gửi lại mã</DesOtpError>
          )}
        </Info>
          <StyleBtn>Tiếp tục</StyleBtn>
      </Wrapper>
    </Container>
  );
}
