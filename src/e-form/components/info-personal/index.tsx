import React from "react";
import {
  MemberInfo,
  TitleDetal,
  TitleInfo,
  InfoDetal,
  Detal,
  InfoDetalL,
} from "./styled";

interface InfoProps {
  data: {
    fullname: string;
    date: string;
    request: string;
    code: string;
  };
}

const InfoPersonal = ({ data }: InfoProps) => {
  return (
    <MemberInfo>
      <TitleInfo>
        <h3>Kính gửi Quý khách {data.fullname},</h3>
        <label>
          FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý
          khách cho hợp đồng bảo hiểm số{" "}
          <span style={{ color: "#E87722" }}>{data.code}</span>
        </label>
      </TitleInfo>
      <InfoDetal>
        <InfoDetalL>
          <div>
            <h4>Yêu cầu điều chỉnh thông tin cá nhân:</h4>
          </div>
          <div>
            <TitleDetal>
              <Detal>
                <h5>Ngày yêu cầu</h5>
                <h6>{data.date}</h6>
              </Detal>
              <Detal>
                <h5>Mã yêu cầu</h5>
                <h6>{data.request}</h6>
              </Detal>
            </TitleDetal>
            <TitleDetal>
              <Detal>
                <h5>Số hợp đồng</h5>
                <h6>{data.code}</h6>
              </Detal>
              <Detal>
                <h5>Bên mua bảo hiểm</h5>
                <h6>{data.fullname}</h6>
              </Detal>
            </TitleDetal>
          </div>
        </InfoDetalL>
      </InfoDetal>
    </MemberInfo>
  );
};

export default InfoPersonal;
