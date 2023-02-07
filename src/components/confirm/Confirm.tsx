import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import {
  Container,
  Wrapper,
  StyledLabel,
  StyledInput,
  GiftInput,
  Agree,
  ButtonContainer,
  StyledButton,
  OrangeWrapper,
  GiftTitle,
  GiftContainer,
  SubGiftTitle,
  ImgContainer,
} from "./styled";
import Image from "next/image";
import { AppProps } from "next/app";
export default function Confirm({ product }) {
  console.log(product);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [memberId, setMemberId] = useState("");
  const [cart, setCart] = useState("");
  const router = useRouter();
  const setData = () => {
    setName(user.name);
    setPhone(user.phone);
    setMemberId(user.memberId);
    setCart(user.cart);
  };
  useEffect(() => {
    if (user) {
      setData();
    }
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/success");
  };

  return (
    <Container>
      <Wrapper onSubmit={onSubmit}>
        {product.desc === "card" ? (
          <>
            <StyledLabel>Người nhận </StyledLabel>
            <GiftInput
              type="text"
              placeholder="Vui lòng nhập Họ và tên người nhận"
            />
            <StyledLabel>Số điện thoại của Bên mua bảo hiểm</StyledLabel>
            <StyledInput type="text" value={phone} />
            <StyledLabel>Nhà mạng</StyledLabel>
            <StyledInput type="text" value={cart} />
          </>
        ) : product.desc === "gift" ? (
          <>
            <StyledLabel>Người nhận</StyledLabel>
            <GiftInput type="text" value={name} />
            <StyledLabel>Điện thoại di động</StyledLabel>
            <GiftInput type="text" value={phone} />
            <StyledLabel>Mã hội viên</StyledLabel>
            <GiftInput type="text" value={memberId} />
            <StyledLabel> Họ tên hội viên</StyledLabel>
            <GiftInput type="text" value={name} />
          </>
        ) : (
          <>
            <StyledLabel>Người nhận</StyledLabel>
            <GiftInput type="text" value={name} />
            <StyledLabel>Điện thoại di động</StyledLabel>
            <GiftInput type="text" value={phone} />
          </>
        )}
        <StyledLabel>Thời gian nhận quà</StyledLabel>
        <Agree>
          FWD sẽ gửi quà đến Quý khách trước hoặc vào đúng ngày sinh nhật qua
          tin nhắn điện thoại di động mà Quý khách đăng ký với FWD.
        </Agree>
        <StyledLabel>
          Quý khách lưu ý quà tặng không thể thay đổi sau khi chọn XÁC NHẬN
        </StyledLabel>

        <ButtonContainer>
          <StyledButton onClick={() => router.back()}>Trở lại</StyledButton>
          <StyledButton style={{ marginLeft: "24px" }}>Xác nhận</StyledButton>
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
    </Container>
  );
}
