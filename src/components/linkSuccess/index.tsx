import React from 'react';
import { useState, useEffect} from 'react';
import { 
    Container, 
    Title, 
    ColorDesHighLight,
    Wapper
 } from './styles'

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
      {!countdown ? (<></>)}
        <Title>Cảm ơn Quý khách đã hoàn tất nhận bộ Hợp đồng bảo hiểm vào ngày <ColorDesHighLight>29/09/2022</ColorDesHighLight>.</Title>
        <Title>Quý khách vui lòng tham khảo bộ Hợp đồng điện tử tại <ColorDesHighLight>FWD Dịch vụ trực tuyến</ColorDesHighLight>.</Title>
      </Wapper>
    </Container>
  )
}
