import React from "react";
import { HeaderWrapper, HeaderContainer, ContainerTitle } from "./styled";

const Header = ({ logo }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img
          src={logo ?? `${process.env.basePath}/images/logo.svg`}
          alt="logo"
        />
        <ContainerTitle>
          <h5>Sống đầy từ hôm nay</h5>
          <h6>Công ty TNHH Bảo hiểm Nhân thọ FWD Việt Nam</h6>
        </ContainerTitle>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
