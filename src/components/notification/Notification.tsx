import React, { useState, useEffect } from "react";
import { Container, Paragraph, Title, Wrapper } from "./styled";
export default function Notification() {
  const [countdown, setCountdown] = useState(false);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(true);
    }, 10000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <Container>
      <Title>Thông báo </Title>
      <Wrapper>
        {!countdown ? (
          <Paragraph>
            Quý khách đã hoàn tất chọn quà trên trang web trực tuyến vào ngày
            <br />
            30/09/2022.
            <br /> Trường hợp cần thêm thông tin, Quý khách vui lòng liên hệ
            Tổng đài Dịch vụ Khách hàng 1800969690 hoặc email
            CustomerConnect.vn@fwd.com
          </Paragraph>
        ) : (
          <Paragraph>
            Đã quá thời gian xử lý, Quý khách vui lòng vào lại đường dẫn trong
            tin nhắn đã gửi đến Quý khách.
          </Paragraph>
        )}
      </Wrapper>
    </Container>
  );
}
