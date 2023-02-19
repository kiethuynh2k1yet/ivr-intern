import React from "react";
import Image from "next/image";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTitle,
  HeaderCompany,
  ContainerTitle,
} from "./styled";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          margin: "0 50px",
          alignItems: "center",
          padding: "42px 0px 21px 0px",
          borderBottom: "1px solid #dbdfe1",
        }}
      >
        <Image
          src={`${process.env.basePath}/images/logo.png`}
          alt="logo"
          width={132}
          height={90}
        />
        <div style={{ marginLeft: "40px" }}>
          <h5
            style={{
              color: "#e87722",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "125%",
              marginBottom: "4px",
            }}
          >
            Sống đầy từ hôm nay
          </h5>
          <h6
            style={{
              fontStyle: "normal",
              fontWeight: "450",
              fontSize: "16px",
              lineHeight: "125%",
              color: "#636566",
            }}
          >
            Công ti trách nhiệm hữu hạn bảo hiểm nhân thọ FWD Việt Nam
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
