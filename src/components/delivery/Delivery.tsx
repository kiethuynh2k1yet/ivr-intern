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
} from "./styled";
import { useRouter } from "next/router";
export default function Delivery({ product }: { product: any }) {
  const router = useRouter();

  if (typeof window !== "undefined") {
    localStorage.setItem("product", JSON.stringify(product));
  }
  const [error, setError] = useState("");
  const [cart, setCart] = useState("");
  const [check, setCheck] = useState(true);

  const name = useRef<HTMLInputElement | null>(null);
  const phone = useRef<HTMLInputElement | null>(null);
  const memberId = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product.desc === "card") {
      if (!cart) {
        setError("Vui lòng chọn nhà mạng");
      }
    }
    if (product.desc === "evoucher") {
      const userInfo = {
        name: name.current.value,
        phone: phone.current.value,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    if (product.desc === "gift") {
      const userInfo = {
        name: name.current.value,
        memberId: memberId.current.value,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    // if (e.target.checked) {
    //   console.log("✅ Checkbox is checked");
    // } else {
    //   setError("Vui lòng đồng ý ");
    // }
    // setCheck((current) => !current);
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
              <GiftInput
                type="text"
                placeholder="Vui lòng nhập Họ và tên người nhận"
                ref={name}
              />
              <StyledLabel>Điện thoại di động</StyledLabel>
              <GiftInput
                type="text"
                placeholder="Vui lòng nhập số điện thoại "
                ref={phone}
              />
            </>
          ) : (
            <>
              <StyledLabel>Nhập mã hội viên</StyledLabel>
              <GiftInput
                type="text"
                placeholder="Vui lòng nhập Mã hội viên"
                ref={memberId}
              />
              <StyledLabel>Họ và tên hội viên</StyledLabel>
              <GiftInput
                type="text"
                placeholder="Vui lòng nhập Họ và tên hội viên"
                ref={name}
              />
            </>
          )}
          <CheckContainer>
            <StyledCheckbox
              type="checkbox"
              defaultChecked={check}
              onChange={() => setCheck(!check)}
            />
            {error && <div>{error}</div>}
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
          <GiftContainer>
            <GiftTitle>Quà đã chọn:</GiftTitle>
            <SubGiftTitle>{product.title}</SubGiftTitle>
          </GiftContainer>
        </OrangeWrapper>
      </SubContainer>
    </Container>
  );
}
