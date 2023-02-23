import React from "react";
import { Container, Wapper, TitleInfo } from "./styled";
import { InfoListDataUser } from "pages/utils/infoListData";
import InfoCardContact from "../info-card-contact";

interface InfoProps {
  data: InfoListDataUser[][];
  dataUser: {
    fullname: string;
    code: string;
  };
}

const Info = ({ data, dataUser }: InfoProps) => {
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
        <InfoCardContact />
      </Wapper>
    </Container>
  );
};

export default Info;
