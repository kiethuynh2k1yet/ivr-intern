import React from "react";
import { useState, useEffect } from "react";
import { Container, Title, ColorDesHighLight, Wapper } from "./styles";

export default function LinkSuccess() {
  const [countdown, setCountdown] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(true);
    }, 10000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <Container>
      <Wapper>
        {!countdown ? (
          <Title>
            Cảm ơn Quý khách đã hoàn tất nhận bộ Hợp đồng bảo hiểm vào ngày{" "}
            <ColorDesHighLight>29/09/2022</ColorDesHighLight>. <br/> <br/>
            Quý khách vui lòng tham khảo bộ Hợp đồng điện tử tại{" "}
          <ColorDesHighLight>FWD Dịch vụ trực tuyến</ColorDesHighLight>.
          </Title>
        ) : (
          <Title>Đường dẫn đã hết hạn. Quý khách vui lòng liên lạc với FWD theo số điện thoại <ColorDesHighLight>1800 969690</ColorDesHighLight> hoặc email <ColorDesHighLight>CustomerConnect.vn@fwd.com</ColorDesHighLight> để được hỗ trợ.</Title>
        )}
      </Wapper>
    </Container>
  );
}
