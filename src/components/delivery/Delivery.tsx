import React from "react";
import {
  Container,
  SubContainer,
  Wrapper,
  Desc,
  StyledLabel,
  StyledInput,
  StyledNote,
  Agree,
  ButtonContainer,
  StyledButton,
  OrangeWrapper,
  GiftTitle,
  GiftContainer,
  SubGiftTitle,
  StyledSelect,
  StyledCheckbox,
  Underline,
} from "./styled";
export default function Delivery() {
  return (
    <Container>
      <SubContainer>
        <Wrapper>
          <Desc>
            Để trải nghiệm nhận quà được tốt nhất, Quý khách vui lòng kiểm tra
            thông tin đã nhập (nếu có) trước khi hoàn tất các bước chọn quà.
          </Desc>
          <StyledLabel>Chọn nhà mạng</StyledLabel>
          <StyledSelect name="cars" id="cars">
            <option value="mobifone">Mobifone</option>
            <option value="vinaphone">Vinaphone</option>
            <option value="viettel">Viettel</option>
          </StyledSelect>
          <StyledLabel>Số điện thoại của Bên mua bảo hiểm</StyledLabel>
          <StyledInput type="text" value="0913473757" />
          <StyledNote>
            <Underline>Ghi chú:</Underline> Để nạp tiền cho số điện thoại khác,
            Quý khách vui lòng chọn hình thức EVOUCHER URBOX ở bước chọn quà.
          </StyledNote>
          <StyledCheckbox type="checkbox" />
          <Agree>
            Tôi đồng ý FWD cung cấp những thông tin trên cho Nhà cung cấp dịch
            vụ nhằm mục đích liên hệ và giao quà.
          </Agree>
          <ButtonContainer>
            <StyledButton>Trở lại</StyledButton>
            <StyledButton style={{ marginLeft: "24px" }}>Tiếp tục</StyledButton>
          </ButtonContainer>
        </Wrapper>
        <OrangeWrapper>
          <GiftContainer>
            <GiftTitle>Quà đã chọn:</GiftTitle>
            <SubGiftTitle>NẠP TIỀN ĐIỆN THOẠI</SubGiftTitle>
          </GiftContainer>
        </OrangeWrapper>
      </SubContainer>
    </Container>
  );
}
