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
import { useRouter } from "next/router";
export default function Delivery({ product }) {
  const router = useRouter();
  const id = router.query;
  console.log(product);
  return (
    <Container>
      <SubContainer>
        <Wrapper>
          <Desc>
            Để trải nghiệm nhận quà được tốt nhất, Quý khách vui lòng kiểm tra
            thông tin đã nhập (nếu có) trước khi hoàn tất các bước chọn quà.
          </Desc>
          {product.desc === "card" ? (
            <>
              <StyledLabel>Chọn nhà mạng</StyledLabel>
              <StyledSelect name="cars" id="cars">
                <option value="mobifone">Mobifone</option>
                <option value="vinaphone">Vinaphone</option>
                <option value="viettel">Viettel</option>
              </StyledSelect>
              <StyledLabel>Số điện thoại của Bên mua bảo hiểm</StyledLabel>
              <StyledInput type="text" value="0913473757" />
              <StyledNote>
                <Underline>Ghi chú:</Underline> Để nạp tiền cho số điện thoại
                khác, Quý khách vui lòng chọn hình thức EVOUCHER URBOX ở bước
                chọn quà.
              </StyledNote>
            </>
          ) : product.desc === "evoucher" ? (
            <>
              <StyledLabel>Người nhận</StyledLabel>
              <StyledInput type="text" value="TRẦN THỊ BÍCH THUỶ " />
              <StyledLabel>Điện thoại di động</StyledLabel>
              <StyledInput type="text" value="0913473757" />
            </>
          ) : (
            <>
              <StyledLabel>Nhập mã hội viên</StyledLabel>
              <StyledInput type="text" value="121912012 " />
              <StyledLabel>Họ và tên hội viên</StyledLabel>
              <StyledInput type="text" value="TRẦN THỊ BÍCH THUỶ " />
            </>
          )}

          <StyledCheckbox type="checkbox" />
          <Agree>
            Tôi đồng ý FWD cung cấp những thông tin trên cho Nhà cung cấp dịch
            vụ nhằm mục đích liên hệ và giao quà.
          </Agree>
          <ButtonContainer>
            <StyledButton onClick={() => router.back()}>Trở lại</StyledButton>

            <StyledButton style={{ marginLeft: "24px" }}>Tiếp tục</StyledButton>
          </ButtonContainer>
        </Wrapper>
        <OrangeWrapper>
          <GiftContainer>
            <GiftTitle>Quà đã chọn:</GiftTitle>
            <SubGiftTitle>{product.title}</SubGiftTitle>
          </GiftContainer>
        </OrangeWrapper>
      </SubContainer>
    </Container>
  );
}
