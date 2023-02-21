import { display } from "html2canvas/dist/types/css/property-descriptors/display";
import React from "react";
import {
  MemberInfo,
  TitleInfo,
  TitleMember,
  TitleArrge,
  ColorArrge,
  InfoDetal,
  TitleDetal,
  Detal,
  TitleInfoDetal,
  TitleData,
} from "./styled";

interface InfoProps {
  data: {
    fullname: string;
    date: string;
    request: string;
    code: string;
  };
}

const InfoPersonal = ({ data }: InfoProps) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "25px 50px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "585px", height: "95%" }}>
        <h3
          style={{
            color: "#e87722",
            marginBottom: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "25px",
            lineHeight: "125%",
          }}
        >
          Kính gửi Quý khách {data.fullname},
        </h3>
        <label
          style={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "150%",
          }}
        >
          FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý
          khách cho hợp đồng bảo hiểm số{" "}
          <label
            style={{
              color: "#e87722",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "150%",
            }}
          >
            {data.code}
          </label>
        </label>
      </div>
      <div
        style={{
          background: "#e87722",
          borderRadius: "16px",
          padding: "20px !important",
        }}
      >
        <h5 style={{ color: "#fff" }}>Yêu cầu điều chỉnh thông tin cá nhân:</h5>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "12px",
              color: "#fff",
              marginTop: "16px",
            }}
          >
            Ngày yêu cầu
          </h5>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "125%",
              color: "#fff",
              marginTop: "16px",
            }}
          >
            Mã yêu cầu
          </h5>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "125%",
              color: "#fff",
              marginTop: "4px",
            }}
          >
            {data.date}
          </h5>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "125%",
              color: "#fff",
              marginTop: "4px",
            }}
          >
            {data.request}
          </h5>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "125%",
              color: "#fff",
              marginTop: "16px",
            }}
          >
            Số hợp đồng
          </h5>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "125%",
              color: "#fff",
              marginTop: "16px",
            }}
          >
            Bên mua bảo hiểm
          </h5>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "125%",
              color: "#fff",
              marginTop: "4px",
            }}
          >
            {data.code}
          </h5>
          <h5
            style={{
              width: "160px",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "125%",
              color: "#fff",
              marginTop: "4px",
            }}
          >
            {data.fullname}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonal;
