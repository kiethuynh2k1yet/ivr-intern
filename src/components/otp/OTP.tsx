import React from "react";
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
export type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};
export default function OTP() {
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
            {/* <OTPGroup>
              {[1, 2, 3, 4, 5, 6].map((digit, idx) => (
                <OTPInput
                  key={idx}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="\d{1}"
                  maxLength={valueLength}
                  className="otp-input"
                  value={digit}
                />
              ))}
            </OTPGroup> */}
          </StyledForm>
        </WrapperInfo>
        <ButtonContainer>
          <OTPButton>Gửi lại mã OTP</OTPButton>
          <StyledButton>Tiếp tục</StyledButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}
