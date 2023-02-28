import React from "react";
import { Form7Wrapper, Form7Title, BodyWrapper, Form7User } from "./styled";
import { HealthCardData } from "pages/utils/healthData";
import HealthCard from "e-form/components/health-card";

interface DataProps {
  healthQuestion1: HealthCardData[];
}
export default function Form71({ healthQuestion1 }: DataProps) {
  return (
    <Form7Wrapper style={{ marginTop: "20px" }}>
      <BodyWrapper>
        <Form7User>
          <HealthCard data={healthQuestion1} />
        </Form7User>
      </BodyWrapper>
    </Form7Wrapper>
  );
}
