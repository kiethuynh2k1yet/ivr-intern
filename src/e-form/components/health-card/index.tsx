import React from "react";
import { HealthCardData } from "pages/utils/healthData";
import {
  HealthContainer,
  Title,
  Content,
  StyledLi,
  ChilrenLi,
  StyledOL,
  RowContent,
  RowChildren,
} from "./styled";

interface HealthCardProps {
  title: string;
  data: HealthCardData[];
}
export default function HealthCard({ title, data }: HealthCardProps) {
  return (
    <HealthContainer>
      <Title>{title}</Title>
      <Content>
        <StyledOL>
          {data.map((i) => (
            <>
              <StyledLi>{i.label}</StyledLi>
              <h6>{i.value}</h6>
              <StyledOL type="a">
                {i.children?.map((i, index) => (
                  <RowChildren key={index}>
                    <ChilrenLi>{i.label}</ChilrenLi>
                    <h6>{i.value}</h6>
                  </RowChildren>
                ))}

                {i.content?.map((i, index) => (
                  <RowContent key={index}>
                    <label>{i.label}</label>
                    <h6>{i.value}</h6>
                  </RowContent>
                ))}
              </StyledOL>
              <hr />
            </>
          ))}
        </StyledOL>
      </Content>
    </HealthContainer>
  );
}
