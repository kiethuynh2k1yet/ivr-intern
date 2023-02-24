import React from "react";
import { Container } from "./styled";

interface InfoProps {
  dataUser: {
    fullname: string;
    code: string;
  };
}

const Info = ({ dataUser }: InfoProps) => {
  return (
    <Container>
      <h3>Kính gửi Quý khách {dataUser.fullname},</h3>
      <label>
        FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý khách
        cho hợp đồng bảo hiểm số{" "}
        <span style={{ color: "#E87722" }}>{dataUser.code}</span>
      </label>
    </Container>
  );
};

export default Info;
