import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  HeaderWrapper,
  HeaderContainer,
  ContainerTitle,
} from "./styled";
import { getImageBase64 } from "services";

const Header = () => {
  // const [img, setImg] = useState("");
  // useEffect(() => {
  //   const imgHeader = async () => {
  //     const imageLoader = await Promise.all([
  //       getImageBase64(`${process.env.basePath}/images/logo.svg`),
  //       // service.getImageBase64(`${process.env.basePath}/images/banner.jpg`),
  //     ]);
  //     const imgLogo = imageLoader[0] as string;
  //     setImg(imgLogo);
  //     console.log(imgLogo);
  //   };
  //   imgHeader();
  // }, []);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* <Image
          src={`${process.env.basePath}/images/logo.svg`}
          alt="logo"
          width={132}
          height={90}
        /> */}
        <ContainerTitle>
          <h5>Sống đầy từ hôm nay</h5>
          <h6>Công ty TNHH Bảo hiểm Nhân thọ FWD Việt Nam</h6>
        </ContainerTitle>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
