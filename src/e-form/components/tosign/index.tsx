import React from "react";
import {
    Title,
    Contract,
    TitleContract,
    TitleCompany,
} from "./styled";

interface ToSignProps {}

const Tosign = ({}: ToSignProps) => {
  return (
      <Contract>
        <Title>
          Một lần nữa, chúng tôi cảm ơn Quý khách tin tưởng và lựa chọn FWD.<br/>
          Trân trọng,
        </Title>
        <TitleContract>Phòng Quản Lý Hợp Đồng</TitleContract>
        <TitleCompany>FWD Việt Nam</TitleCompany>
      </Contract>
  );
};
export default Tosign;
