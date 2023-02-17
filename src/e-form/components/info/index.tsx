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
    <></>
    // <div style={{display:"flex", margin:"25px 50px", justifyContent:"space-between"}}>
    //   <div style={{width:"585px", height:"95%"}}>
    //     <h3 style={{color:"#e87722", marginBottom:"16px", fontStyle:"normal", fontWeight: 700, fontSize: "25px", lineHeight:"125%"}}>
    //       Kính gửi Quý khách {data.fullname},
    //     </h3>
    //     <p>
    //       FWD đã nhận được Phiếu yêu cầu điều chỉnh thông tin cá nhân của Quý
    //       khách cho hợp đồng bảo hiểm số <p>{data.code}</p>
    //     </p>
    //   </div>
    //   <InfoDetal>
    //     <TitleDetal>
    //       Yêu cầu điều chỉnh thông tin cá nhân:
    //     </TitleDetal>
    //     <Detal>
    //       <TitleInfoDetal>Ngày yêu cầu</TitleInfoDetal>
    //       <TitleInfoDetal>Mã yêu cầu</TitleInfoDetal>
    //     </Detal>
    //     <Detal>
    //       <TitleData>{data.date}</TitleData>
    //       <TitleData>{data.request}</TitleData>
    //     </Detal>
    //     <Detal>
    //       <TitleInfoDetal>Số hợp đồng</TitleInfoDetal>
    //       <TitleInfoDetal>Bên mua bảo hiểm</TitleInfoDetal>
    //     </Detal>
    //     <Detal>
    //       <TitleData>{data.code}</TitleData>
    //       <TitleData>{data.fullname}</TitleData>
    //     </Detal>
    //   </InfoDetal>
    // </div>
  );
};

export default Info;
