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
import Image from "next/image";
import { useDispatch } from "react-redux";
export default function Giftcard({ item }) {
  console.log(typeof item);
  return (
    <MainContainer>
      <Container>
        <Image src={item.img} alt="" width={179} height={123} />

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
