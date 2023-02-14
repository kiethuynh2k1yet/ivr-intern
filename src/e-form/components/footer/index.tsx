import React from "react";
import {
  FooterWapper,
  InfoFooter,
  Info,
  TitleCompant,
  TitleInfo,
  TitlePhone,
} from "./styled";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <FooterWapper>
      <InfoFooter>
        <Info>
          <TitleCompant>
            Tầng 11, Toà nhà Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé, Quận 1,
            TP.HCM, Việt Nam
          </TitleCompant>
          <TitleInfo>Telephone</TitleInfo>
          <TitlePhone>(28) 6256 3688</TitlePhone>
        </Info>
        <Info>
          <TitleCompant>fwd.com.vn</TitleCompant>
          <TitleInfo>Hotline</TitleInfo>
          <TitlePhone>1800 96 96 90</TitlePhone>
        </Info>
      </InfoFooter>
    </FooterWapper>
  );
};

export default Footer;
