import React from "react";
import Image from "next/image";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTitle,
  HeaderCompany,
  ContainerTitle,
} from "./styled";

interface HeaderProps {
}

const Header = ({}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Image
          src={`${process.env.basePath}/images/FWDLogo.svg`}
          alt="logo"
          width={132}
          height={90}
        />
        <ContainerTitle>
          <HeaderTitle>Sống đầy từ hôm nay</HeaderTitle>
          <HeaderCompany>
            Công ti trách nhiệm hữu hạn bảo hiểm nhân thọ FWD Việt Nam
          </HeaderCompany>
        </ContainerTitle>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
