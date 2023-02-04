import React from "react";
import { Container, Title, SubTitle, Wrapper } from "./styled";
import Giftcard from "./../giftcard/giftcard";
export default function Gift() {
  return (
    <Container>
      <Title>QUÀ TẶNG SINH NHẬT</Title>

      <SubTitle>
        Để đón mừng tuổi mới với thật nhiều niềm vui,
        <br /> Quý khách hãy chọn một món quà mình yêu thích.
      </SubTitle>

      <Wrapper>
        <Giftcard />
        <Giftcard />
        <Giftcard />
        <Giftcard />
        <Giftcard />
        <Giftcard />
        <Giftcard />
        <Giftcard />

        <Giftcard />
        <Giftcard />
      </Wrapper>
    </Container>
  );
}
