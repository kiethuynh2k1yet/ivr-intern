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
} from "./styled";
import { Error } from "styles/global.styled";

export default function Authentication() {
  type ErrorMess = {
    date?: string;
    id?: string;
  };
  interface formError {
    date?: string;
    id?: string;
  }
  const [formValues, setFormValues] = useState({ date: "", id: "" });
  const [formErrors, setFormErrors] = useState<formError>({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    }
    // if (value.date!=="1213"){
    //   errors.date = "Vui lòng nhập ngày tháng năm sinh";

    // }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.date !== "" && formValues.id !== "") {
      router.push(`/otp`);
    }
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <Container>
      <Title>Thông tin của Quý khách </Title>
      <Wrapper>
        <NotiFill>Quý khách vui lòng nhập thông tin sau đây:</NotiFill>
        <WrapperInfo>
          <Infomation onSubmit={handleSubmit}>
            <StyledLabel>Ngày tháng năm sinh:</StyledLabel>
            <StyledInput
              type="text"
              name="date"
              placeholder="Vui lòng nhập"
              value={formValues.date}
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
            />
            <Error>{formErrors.id}</Error>

            <ButtonContainer>
              <StyledButton>Tiếp tục</StyledButton>
            </ButtonContainer>
          </Infomation>
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
}
