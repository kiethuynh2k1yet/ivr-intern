import React from "react";
import {
  Container,
  Title,
  Contract,
  TitleContract,
  TitleCompany,
} from "./styled";

interface ToSignProps {}

const Tosign = ({}: ToSignProps) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        textAlign: "start",
        margin: "0px 50px 131px",
      }}
    >
      <div style={{ maxHeight: "90px", flex: 1 }}></div>
      <h5
        style={{
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "150%",
          color: "#183028",
          marginBottom: "20px",
        }}
      >
        Một lần nữa, chúng tôi cảm ơn Quý khách tin tưởng và lựa chọn FWD.
        <br />
        Trân trọng,
      </h5>
      <h6
        style={{
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "150%",
          color: "#183028",
          marginBottom: "8px",
        }}
      >
        Phòng Quản Lý Hợp Đồng
      </h6>
      <h5
        style={{
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "150%",
          color: "#e87722",
        }}
      >
        FWD Việt Nam
      </h5>
    </div>
  );
};
export default Tosign;
