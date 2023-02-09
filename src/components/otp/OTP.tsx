import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Title,
  Wrapper,
  NotiFill,
  StyledForm,
  WrapperInfo,
  StyledLabel,
  StyledInput,
  ButtonContainer,
  StyledButton,
  OTPButton,
  OTPTimer,
} from "./styled";
import { Error } from "styles/global.styled";

export default function OTP() {
  const [formValues, setFormValues] = useState({ otp: "" });
  const [formErrors, setFormErrors] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.otp) {
      errors.otp = "Mã OTP là thông tin bắt buộc.";
    }

    return errors;
  };

  const handleSubmit = () => {
    if (formValues.otp === "" && !disabled) {
      setFormErrors(validate(formValues));
    } else {
      router.push(`/gift`);
    }
  };
  useEffect(() => {
    if (timeLeft === 0) {
      console.log("TIME LEFT IS 0");
      setTimeLeft(null);
      setDisabled(false);
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      setDisabled(true);
      setFormErrors(!validate(formValues));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <Container>
      <Title>Xác nhận thông tin </Title>
      <Wrapper>
        <NotiFill>
          Quý khách vui lòng nhập mã OTP đã được gửi đến số điện thoại <br />
          09******79 đã đăng ký với FWD. <br />
          Mã OTP sẽ hết hiệu lực sau 5 phút.
        </NotiFill>
        <WrapperInfo>
          <StyledForm>
            <StyledLabel>Nhập mã OTP:</StyledLabel>
            <StyledInput
              type="text"
              maxLength={6}
              pattern="\d*"
              name="otp"
              value={formValues.otp}
              onChange={handleChange}
            />
            {disabled ? (
              <OTPTimer>Mã OTP sẽ được gửi lại sau {timeLeft}s</OTPTimer>
            ) : (
              <Error>{formErrors.otp}</Error>
            )}
          </StyledForm>
        </WrapperInfo>
        <ButtonContainer>
          <OTPButton
            name="otp"
            disabled={disabled}
            onClick={() => setTimeLeft(6)}
          >
            {disabled ? "Vui lòng chờ" : "Gửi lại mã OTP"}
          </OTPButton>
          <StyledButton name="continue" onClick={handleSubmit}>
            Tiếp tục
          </StyledButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}
