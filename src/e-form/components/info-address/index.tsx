import { display } from "html2canvas/dist/types/css/property-descriptors/display";
import React from "react";
import { MemberInfo, TitleInfo, ColorArrge, InfoDetal, Detal } from "./styled";

interface InfoProps {
  data: {
    fullname: string;
    date: string;
    request: string;
    code: string;
  };
}

const InfoAddress = ({ data }: InfoProps) => {
  return (
    <MemberInfo>
      <TitleInfo>
        <h3>Kính gửi Quý khách {data.fullname},</h3>
        <label>
          FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý
          khách cho hợp đồng bảo hiểm số <ColorArrge>{data.code}</ColorArrge>
        </label>
      </TitleInfo>
      <InfoDetal>
        <h5>Yêu cầu điều chỉnh địa chỉ liên lạc:</h5>
        <Detal>
          <h5>Ngày yêu cầu</h5>
          <h5>Số hợp đồng</h5>
        </Detal>
        <Detal>
          <h6>{data.date}</h6>
          <h6>{data.code}</h6>
        </Detal>
        <Detal>
          <h5>Bên mua bảo hiểm</h5>
          <h5>Người được bảo hiểm chính</h5>
        </Detal>
        <Detal>
          <h6>{data.fullname}</h6>
          <h6>{data.fullname}</h6>
        </Detal>
      </InfoDetal>
    </MemberInfo>
  );
};

export default InfoAddress;
