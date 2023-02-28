import React from "react";
import { Form7Wrapper, BodyWrapper, Form7User } from "./styled";
import { HealthCardData } from "pages/utils/healthData";
import { policyData } from "pages/utils/infoData";

import HealthCard from "e-form/components/health-card";
import InfoPDF from "../info-pdf";
import ListItemConsider from "../list-item-consider";
import ListItem from "./../list-item/index";
import { confirmList, considerUpdate } from "pages/utils/listData";

interface DataProps {
  healthQuestion2: HealthCardData[];
  image?: string;
}
export default function EForm72({ healthQuestion2, image }: DataProps) {
  const imgPolicy = policyData.map((item) =>
    item.map((item1) => ({
      ...item1,
      label: image ?? item1.label,
    }))
  );
  return (
    <Form7Wrapper>
      <BodyWrapper>
        <Form7User>
          <HealthCard data={healthQuestion2} />
        </Form7User>
      </BodyWrapper>

      <BodyWrapper style={{ marginTop: "20px" }}>
        <Form7User>
          <InfoPDF title="Chứng từ đăng tải" data={imgPolicy} />
        </Form7User>
      </BodyWrapper>

      <ListItemConsider list={considerUpdate} />
      <ListItem list={confirmList} />
    </Form7Wrapper>
  );
}
