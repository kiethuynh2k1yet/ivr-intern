import React from "react";
import { HeaderContainer, ContainerTitle } from "./styled";

interface headerProps {
  logo?: string;
}

const Header = ({ logo }: headerProps) => {
  return (
    <HeaderContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo ?? `${process.env.basePath}/images/logo.svg`} alt="logo" />
      <ContainerTitle>
        <h5>Sống đầy từ hôm nay</h5>
        <h6>Công ty TNHH Bảo hiểm Nhân thọ FWD Việt Nam</h6>
      </ContainerTitle>
    </HeaderContainer>
  );
};

export default Header;
