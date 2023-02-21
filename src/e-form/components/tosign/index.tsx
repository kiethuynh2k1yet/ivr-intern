import React from "react";
import {
  Container,
  Contract,
} from "./styled";

interface ToSignProps {}

const Tosign = ({}: ToSignProps) => {
  return (
    <Contract>
      <Container></Container>
      <h5>
        Một lần nữa, chúng tôi cảm ơn Quý khách tin tưởng và lựa chọn FWD.
        <br />
        Trân trọng,
      </h5>
      <h6>Phòng Quản Lý Hợp Đồng</h6>
      <h4>FWD Việt Nam</h4>
    </Contract>
  );
};
export default Tosign;
