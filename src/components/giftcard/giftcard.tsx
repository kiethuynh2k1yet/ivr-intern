import Link from "next/link";
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
export default function Giftcard({ item }) {
  return (
    <MainContainer>
      <Container>
        <SubContainer>
          <GiftTitle>{item.title}</GiftTitle>
          <StyledUL>
            {item.list.map((i, key) => (
              <StyledLi key={key}>{i}</StyledLi>
            ))}
          </StyledUL>
          <ButtonContainer>
            <Link href={`/gift/${item.id}`}>
              <StyledButton>Chọn</StyledButton>
            </Link>
          </ButtonContainer>
        </SubContainer>
      </Container>
    </MainContainer>
  );
}
