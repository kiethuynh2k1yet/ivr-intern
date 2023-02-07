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

export default function Delivery({ product }: { product: any }) {
  const dispatch = useDispatch(); // <-- dispatch function

  const router = useRouter();

  const [error, setError] = useState("");
  const [cart, setCart] = useState("");
  const [check, setCheck] = useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [memberId, setMemberId] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.desc === "card") {
      if (!cart) {
        setError("Vui lòng chọn nhà mạng");
      }
    } else {
      dispatch(saveUser({ name, phone, memberId, cart }));
      router.push(`/confirm/${product.id}`);
    }
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
              {error && <div>{error}</div>}
              <StyledLabel>Chọn nhà mạng</StyledLabel>
              <StyledSelect
                value={cart}
                onChange={(e) => setCart(e.target.value)}
              >
                <option value="">Chọn nhà mạng</option>
                <option value="Mobifone">Mobifone</option>
                <option value="Vinaphone">Vinaphone</option>
                <option value="Viettel">Viettel</option>
              </StyledSelect>
              <StyledLabel>Số điện thoại của Bên mua bảo hiểm</StyledLabel>
              <StyledInput
                type="text"
                placeholder="Vui lòng nhập số điện thoại "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <StyledNote>
                <Underline>Ghi chú:</Underline> Để nạp tiền cho số điện thoại
                khác, Quý khách vui lòng chọn hình thức EVOUCHER URBOX ở bước
                chọn quà.
              </StyledNote>
            </>
          ) : product.desc === "evoucher" ? (
            <>
              <StyledLabel>Người nhận</StyledLabel>
              <GiftInput
                type="text"
                value={name}
                placeholder="Vui lòng nhập Họ và tên người nhận"
                onChange={(e) => setName(e.target.value)}
              />
              <StyledLabel>Điện thoại di động</StyledLabel>
              <GiftInput
                type="text"
                placeholder="Vui lòng nhập số điện thoại "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          ) : (
            <>
              <StyledLabel>Nhập mã hội viên</StyledLabel>
              <GiftInput
                type="text"
                placeholder="Vui lòng nhập Mã hội viên"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
              />
              <StyledLabel>Họ và tên hội viên</StyledLabel>
              <GiftInput
                type="text"
                placeholder="Vui lòng nhập Họ và tên hội viên"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
