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
// import { saveGift } from "redux/reducers/root-reducer";
export default function Giftcard({ item }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(saveGift(item));
  };
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
              <StyledButton onClick={handleClick}>Chọn</StyledButton>
            </Link>
          </ButtonContainer>
        </SubContainer>
      </Container>
    </MainContainer>
  );
}
