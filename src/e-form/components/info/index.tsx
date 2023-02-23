import React from "react";
import { Container, Wapper, TitleInfo } from "./styled";
import { infoData } from "pages/utils/infoListData";
import InfoCardContact from "../info-card-contact";

interface InfoProps {
  dataUser: {
    fullname: string;
    code: string;
  };
}

const Info = ({ dataUser }: InfoProps) => {
  return (
    <Container>
      <Wapper>
        <TitleInfo>
          <h3>Kính gửi Quý khách {dataUser.fullname},</h3>
          <label>
            FWD đã nhận được Phiếu yêu cầu điều chỉnh địa chỉ liên lạc của Quý
            khách cho hợp đồng bảo hiểm số{" "}
            <span style={{ color: "#E87722" }}>{dataUser.code}</span>
          </label>
        </TitleInfo>
        <InfoCardContact title="Yêu cầu điều chỉnh thông tin cá nhân" data={infoData} />
      </Wapper>
    </Container>
  );
};

export default Info;
