import React from "react";
import {
  FooterWapper,
  Title,
  InfoFooter,
  StrikeThrough,
  Info,
  TitleCompant,
  TitleInfo,
  TitlePhone,
  Contract,
  TitleContract,
  TitleCompany,
} from "./styled";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <FooterWapper>
      <Contract>
        <Title>
          Một lần nữa, chúng tôi cảm ơn Quý khách tin tưởng và lựa chọn FWD.
          Trân trọng,
        </Title>
        <TitleContract>Phòng Quản Lý Hợp Đồng</TitleContract>
        <TitleCompany>FWD Việt Nam</TitleCompany>
      </Contract>
      <InfoFooter>
        <StrikeThrough></StrikeThrough>
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
