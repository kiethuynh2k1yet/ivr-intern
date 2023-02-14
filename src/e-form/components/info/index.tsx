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

const Info = ({ data }: InfoProps) => {
  return (
    <MemberInfo>
      <TitleInfo>
        <TitleMember className="h5">
          Kính gửi Quý khách {data.fullname},
        </TitleMember>
        <TitleArrge>
          FWD đã nhận được Phiếu yêu cầu điều chỉnh thông tin cá nhân của Quý
          khách cho hợp đồng bảo hiểm số <ColorArrge>{data.code}</ColorArrge>
        </TitleArrge>
      </TitleInfo>
      <InfoDetal>
        <TitleDetal>
          Yêu cầu điều chỉnh thông tin cá nhân:
        </TitleDetal>
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
  );
};

export default Info;
