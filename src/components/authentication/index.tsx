import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Error } from "styles/global.styled";
import {
  Container,
  Title,
  Info,
  InfoTitle,
  InputInfoTitle,
  Demo,
  DesTitle,
  DesCheckBox,
  StyleBtn,
  ColorDesHighLight,
  Wapper,
} from "./styles";

export default function Authentication() {
  const [errorMessage, setErrorMessage] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmitDate = (e) => {
    if (date === "") {
      e.preventDefault();
      setErrorMessage("Vui lòng nhập ngày tháng năm sinh");
    }else {
      e.preventDefault();
      setErrorMessage("Ngày tháng năm sinh chưa hợp lệ");
    }
  };

  const onSubmitPassword = (e) => {
    if (password === "") {
      e.preventDefault();
      setErrorMessage("Vui lòng nhập số CMND/CCCD/Passport");
    }else {
      e.preventDefault();
      setErrorMessage("Số CMND/CCCD/Passport chưa hợp lệ");
    }
  };

  const onChange = () =>{
    router.push('/otp');
  }

  return (
    <Container>
      <Wapper>
        <Title>
          Chúc mừng hợp đồng bảo hiểm 31235802 của quý khách new TC038.2 đã được
          phát hành
        </Title>
        <DesTitle>
          Để nhận trực tuyến bộ Hợp đồng bảo hiểm, Quý khách vui lòng nhập các
          thông tin sau đây:
        </DesTitle>
        <Info onSubmit={onSubmitDate}>
          <InfoTitle>Ngày tháng năm sinh của Bên mua bảo hiểm</InfoTitle>
          <InputInfoTitle
            type="text"
            name="date"
            placeholder="Ngày/Tháng/Năm"
            onChange={(e) => setDate(e.target.value)}
          />
          {errorMessage && <Error className="error"> {errorMessage} </Error>}
          <Demo>Minh họa 31/01/2019</Demo>
        </Info>
        <Info onSubmit={onSubmitPassword}>
          <InfoTitle>Số CMND/CCCD/Passport</InfoTitle>
          <InputInfoTitle 
            type="text" 
            name="IdCard" 
            placeholder="" 
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <Error className="error"> {errorMessage} </Error>}
        </Info>
        <DesTitle>
          Theo Quy tắc và Điều khoản hợp đồng bảo hiểm,{" "}
          <ColorDesHighLight>
            Quý khách có thời gian cân nhắc là 21 ngày, kể từ ngày hôm nay
            29/09/2022 đến hết ngày 20/10/2022
          </ColorDesHighLight>
          , để kiểm tra lại các thông tin của Quý khách, tìm hiểu kỹ các quyền
          lợi, nghĩa vụ và Quy tắc Điều khoản của Hợp đồng bảo hiểm. Trong
          khoảng thời gian 21 ngày này, Quý khách có thể cân nhắc và quyết định
          tiếp tục thực hiện hợp đồng bảo hiểm hoặc yêu cầu hủy bỏ hợp đồng bảo
          hiểm.
        </DesTitle>
        <DesTitle>
          Đồng thời, Quý khách sẽ nhận được{" "}
          <ColorDesHighLight>bộ giấy Chứng nhận bảo hiểm</ColorDesHighLight> từ
          chúng tôi thông qua nhà cung cấp dịch vụ bưu phát.
        </DesTitle>
        <DesTitle>
          <DesCheckBox type="checkbox" />
          Tôi, bên mua bảo hiểm của Hợp đồng bảo hiểm số 31235802 đã đọc và hiểu
          rõ các nội dung nói trên
        </DesTitle>
          <StyleBtn onClick={onSubmitDate}>Tiếp tục</StyleBtn>
      </Wapper>
    </Container>
  );
}
