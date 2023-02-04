import React from "react";
import {
  MainContainer,
  Container,
  SubContainer,
  GiftTitle,
  StyledUL,
  ButtonContainer,
  StyledButton,
  StyledLi,
} from "./styled";
export default function giftcard() {
  return (
    <MainContainer>
      <Container>
        <SubContainer>
          <GiftTitle>EVOUCHER TIKI</GiftTitle>
          <StyledUL>
            <StyledLi>Giá trị: 500.000 đồng</StyledLi>
            <StyledLi>Mua sắm trực tuyến trên Tiki</StyledLi>
            <StyledLi>Thời hạn sử dụng: 1 năm</StyledLi>
          </StyledUL>
          <ButtonContainer>
            <StyledButton>Chọn</StyledButton>
          </ButtonContainer>
        </SubContainer>
      </Container>
    </MainContainer>
  );
}
