import React, { useRef, useState } from "react";
import {
  Container,
  SubContainer,
  Wrapper,
  Desc,
  StyledLabel,
  StyledInput,
  StyledCheckbox,
  GiftInput,
  StyledNote,
  Agree,
  ButtonContainer,
  StyledButton,
  OrangeWrapper,
  GiftTitle,
  GiftContainer,
  SubGiftTitle,
  StyledSelect,
  Underline,
  CheckContainer,
  ImgContainer,
} from "./styled";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { saveUser } from "redux/reducers/root-reducer";
import { Error } from "styles/global.styled";

export default function Delivery({ product }: { product: any }) {
  const dispatch = useDispatch(); // <-- dispatch function

  const router = useRouter();

  const [check, setCheck] = useState(true);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    memberId: "",
    card: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(name, value);
  };

  // const handleCard = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   setFormValues(value);
  // };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Vui lòng nhập Họ và tên hội viên";
    }
    if (!values.phone) {
      errors.phone = "Vui lòng nhập số điện thoại";
    }
    if (!values.memberId) {
      errors.memberId = "Vui lòng nhập Mã hội viên";
    }
    if (!values.card) {
      errors.card = "Vui lòng chọn nhà mạng";
    }
    return errors;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.desc === "evoucher") {
      if (formValues.name !== "" && formValues.phone !== "") {
        dispatch(saveUser(formValues));
        router.push(`/confirm/${product.id}`);
      }
    }
    if (product.desc === "gift") {
      if (formValues.name !== "" && formValues.memberId !== "") {
        dispatch(saveUser(formValues));
        router.push(`/confirm/${product.id}`);
      }
    }
    if (product.desc === "card") {
      if (formValues.card !== "" && formValues.phone !== "") {
        dispatch(saveUser(formValues));
        router.push(`/confirm/${product.id}`);
      }
    }
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <Container>
      <SubContainer>
        <Wrapper onSubmit={onSubmit}>
          <Desc>
            Để trải nghiệm nhận quà được tốt nhất, Quý khách vui lòng kiểm tra
            thông tin đã nhập (nếu có) trước khi hoàn tất các bước chọn quà.
          </Desc>
          {product.desc === "card" ? (
            <>
              <Error>{formErrors.card}</Error>
              <Error>{formErrors.phone}</Error>

              <StyledLabel>Chọn nhà mạng</StyledLabel>
              <StyledSelect name="card" onChange={handleChange}>
                <option value="">Chọn nhà mạng</option>
                <option value="Mobifone">Mobifone</option>
                <option value="Vinaphone">Vinaphone</option>
                <option value="Viettel">Viettel</option>
              </StyledSelect>
              <StyledLabel>Số điện thoại của Bên mua bảo hiểm</StyledLabel>
              <StyledInput
                type="text"
                name="phone"
                placeholder="Vui lòng nhập số điện thoại "
                value={formValues.phone}
                onChange={handleChange}
              />

              <StyledNote>
                <Underline>Ghi chú:</Underline> Để nạp tiền cho số điện thoại
                khác, Quý khách vui lòng chọn hình thức EVOUCHER URBOX ở bước
                chọn quà.
              </StyledNote>
            </>
          ) : product.desc === "evoucher" ? (
            <>
              <Error>{formErrors.name}</Error>
              <Error>{formErrors.phone}</Error>
              <StyledLabel>Người nhận</StyledLabel>
              <GiftInput
                type="text"
                name="name"
                value={formValues.name}
                placeholder="Vui lòng nhập Họ và tên người nhận"
                onChange={handleChange}
              />
              <StyledLabel>Điện thoại di động</StyledLabel>
              <StyledInput
                type="text"
                name="phone"
                placeholder="Vui lòng nhập số điện thoại "
                value={formValues.phone}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <Error>{formErrors.memberId}</Error>
              <Error>{formErrors.name}</Error>
              <StyledLabel>Nhập mã hội viên</StyledLabel>
              <GiftInput
                type="text"
                name="memberId"
                placeholder="Vui lòng nhập Mã hội viên"
                value={formValues.memberId}
                onChange={handleChange}
              />
              <StyledLabel>Họ và tên hội viên</StyledLabel>
              <GiftInput
                type="text"
                name="name"
                placeholder="Vui lòng nhập Họ và tên hội viên"
                value={formValues.name}
                onChange={handleChange}
              />
            </>
          )}
          <CheckContainer>
            <StyledCheckbox
              type="checkbox"
              defaultChecked={check}
              onChange={() => setCheck(!check)}
            />
            <Agree>
              Tôi đồng ý FWD cung cấp những thông tin trên cho Nhà cung cấp dịch
              vụ nhằm mục đích liên hệ và giao quà.
            </Agree>
          </CheckContainer>
          <ButtonContainer>
            <StyledButton onClick={() => router.back()}>Trở lại</StyledButton>
            <StyledButton style={{ marginLeft: "24px" }}>Tiếp tục</StyledButton>
          </ButtonContainer>
        </Wrapper>
        <OrangeWrapper>
          <ImgContainer>
            <Image src={product.img} alt="" width={383} height={215} />
          </ImgContainer>
          <GiftContainer>
            <GiftTitle>Quà đã chọn:</GiftTitle>
            <SubGiftTitle>{product.title}</SubGiftTitle>
          </GiftContainer>
        </OrangeWrapper>
      </SubContainer>
    </Container>
  );
}
