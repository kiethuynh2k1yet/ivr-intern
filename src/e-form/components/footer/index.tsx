import { TIMEOUT } from "dns";
import React from "react";
import {
  FooterWapper,
  InfoFooter,
  Info,
  Title,
} from "./styled";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <FooterWapper>
      <InfoFooter>
        <Info>
          <Title>
            Tầng 11, Toà nhà Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé, Quận 1,
            TP.HCM, Việt Nam
          </Title>
          <Title>Telephone</Title>
          <Title>(28) 6256 3688</Title>
        </Info>
        <Info>
          <Title>fwd.com.vn</Title>
          <Title>Hotline</Title>
          <Title>1800 96 96 90</Title>
        </Info>
      </InfoFooter>
    </FooterWapper>
  );
};

export default Footer;
