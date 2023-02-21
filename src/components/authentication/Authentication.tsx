import React, { useState, useRef, useEffect } from "react";
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
  ErrorAll,
  StyledFormat,
} from "./styled";
import { Error } from "styles/global.styled";

export default function Authentication() {
  type ErrorMess = {
    date?: string;
    id?: string;
    all?: string;
  };
  interface formError {
    date?: string;
    id?: string;
    all?: string;
  }
  const [formValues, setFormValues] = useState({ date: "", id: "", all: "" });
  const [formErrors, setFormErrors] = useState<formError>({});

  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values: any) => {
    const errors: ErrorMess = {};
    if (!values.date) {
      errors.date = "Vui lòng nhập ngày tháng năm sinh";
    }
    if (!values.id) {
      errors.id = "Vui lòng nhập số CMND/CCCD/Hộ chiếu";
    } else {
      errors.all = `Thông tin Quý khách vừa nhập chưa phù hợp, Quý khách vui lòng kiểm tra và nhập lại. Cám ơn Quý khách! Trường hợp cần trao đổi thêm, Quý khách vui lòng liên hệ Tổng đài Dịch vụ Khách hàng 1800969690 hoặc email CustomerConnect.vn@fwd.com để được hỗ trợ`;
    }
    console.log(errors);
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.date !== "01/01/2020" || formValues.id !== "123456789") {
      setFormErrors(validate(formValues));
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
          <Infomation onSubmit={handleSubmit}>
            <StyledLabel>Ngày tháng năm sinh:</StyledLabel>

            <StyledFormat
              name="date"
              placeholder="Vui lòng nhập"
              displayType="input"
              value={formValues.date}
              format="##/##/####"
              onChange={handleChange}
            />
            <Demo>Minh họa: 29/01/2019</Demo>
            <Error>{formErrors.date}</Error>
            <StyledLabel>Số CMND/CCCD/Hộ chiếu:</StyledLabel>
            <StyledInput
              type="text"
              name="id"
              placeholder="(9-12 ký tự liền nhau)"
              value={formValues.id}
              onChange={handleChange}
              minLength={9}
              maxLength={12}
            />
            <Error>{formErrors.id}</Error>
            <ErrorAll>{formErrors.all}</ErrorAll>
            <ButtonContainer>
              <StyledButton>Tiếp tục</StyledButton>
            </ButtonContainer>
          </Infomation>
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
}
