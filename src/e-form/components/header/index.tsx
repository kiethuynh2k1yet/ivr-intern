import React from "react";
import Image from "next/image";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTitle,
  HeaderCompany,
  ContainerTitle,
  StrikeThrough,
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

interface HeaderProps {
  data: {
    fullname: string;
    date: string;
    request: string;
    code: string;
  };
}

const Header = ({ data }: HeaderProps) => {
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
      <StrikeThrough></StrikeThrough>
      <MemberInfo>
        <TitleInfo>
          <TitleMember>Kính gửi Quý khách {data.fullname},</TitleMember>
          <TitleArrge>
            FWD đã nhận được Phiếu yêu cầu điều chỉnh thông tin cá nhân của Quý
            khách cho hợp đồng bảo hiểm số <ColorArrge>{data.code}</ColorArrge>
          </TitleArrge>
        </TitleInfo>
        <InfoDetal>
          <TitleDetal>Yêu cầu điều chỉnh thông tin cá nhân:</TitleDetal>
          <Detal>
            <TitleInfoDetal>Ngày yêu cầu</TitleInfoDetal>
            <TitleInfoDetal>Mã yêu cầu</TitleInfoDetal>
          </Detal>
          <Detal>
            <TitleData>{data.date}</TitleData>
            <TitleData>{data.request}</TitleData>
          </Detal>
          <Detal>
            <TitleInfoDetal>Số hợp đồng</TitleInfoDetal>
            <TitleInfoDetal>Bên mua bảo hiểm</TitleInfoDetal>
          </Detal>
          <Detal>
            <TitleData>{data.code}</TitleData>
            <TitleData>{data.fullname}</TitleData>
          </Detal>
        </InfoDetal>
      </MemberInfo>
    </HeaderWrapper>
  );
};

export default Header;
