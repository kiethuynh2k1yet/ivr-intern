import React, { useState, useMemo } from "react";
import { RE_DIGIT } from "./constant";
import { useRouter } from "next/navigation";
import {
  Container,
  Title,
  Wrapper,
  NotiFill,
  WrapperFill,
  StyledForm,
  WrapperInfo,
  StyledLabel,
  ButtonContainer,
  StyledButton,
  OTPButton,
  OTPGroup,
  OTPInput,
} from "./styled";
import { Error } from "styles/global.styled";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const handleChange = (value: string) => {
    setOtp(value);
  };
  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        otp.substring(0, idx) + targetValue + otp.substring(idx + 1);

      handleChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;

      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    } else if (targetValueLength === 6) {
      handleChange(targetValue);

      target.blur();
    }
  };
  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };
  const valueItems = useMemo(() => {
    const valueArray = otp.split("");
    const items: Array<string> = [];

    for (let i = 0; i < 6; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [otp, 6]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp === "") {
      setErrorMessage("Mã OTP là thông tin bắt buộc");
    } else {
      router.push(`/gift`);
    }
  };
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
          <StyledForm onSubmit={onSubmit}>
            <StyledLabel>Nhập mã OTP:</StyledLabel>

            <OTPGroup>
              {valueItems.map((digit, idx) => (
                <OTPInput
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="\d{1}"
                  maxLength={6}
                  className="otp-input"
                  value={digit}
                  onChange={(e) => inputOnChange(e, idx)}
                  onKeyDown={inputOnKeyDown}
                  onFocus={inputOnFocus}
                />
              ))}
            </OTPGroup>
            {errorMessage && <Error className="error"> {errorMessage} </Error>}
            <ButtonContainer>
              <OTPButton>Gửi lại mã OTP</OTPButton>
              <StyledButton>Tiếp tục</StyledButton>
            </ButtonContainer>
          </StyledForm>
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
}
