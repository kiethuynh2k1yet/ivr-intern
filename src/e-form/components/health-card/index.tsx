import React from "react";
import { HealthCardData } from "pages/utils/healthData";
import {
  HealthContainer,
  Title,
  Content,
  StyledUL,
  StyledLi,
  ChildrenLi,
  RowContent,
  RowChildren,
} from "./styled";

interface HealthCardProps {
  title?: string;
  data: HealthCardData[];
}
export default function HealthCard({ title, data }: HealthCardProps) {
  return (
    <HealthContainer>
      {title ? <Title>{title}</Title> : ""}
      <Content>
        <StyledUL>
          {data.map((i, index) => (
            <>
              <StyledLi>
                <span>{index + 1}.</span>
                {i.label}
              {/* Thay đổi chổ này */}
              <h6>{i.value}</h6>
              </StyledLi>
              {i.children ? (
                <ul style={{ padding: 0, listStyle: "none" }}>
                  {i.children?.map((i, index) => (
                    <RowChildren key={index}>
                      <ChildrenLi>{i.label}</ChildrenLi>
                      <h6>{i.value}</h6>
                    </RowChildren>
                  ))}
                </ul>
              ) : (
                ""
              )}

              {i.content ? (
                <>
                  {i.content?.map((i, index) => (
                    <RowContent key={index}>
                      <label>{i.label}</label>
                      <h6>{i.value}</h6>
                    </RowContent>
                  ))}
                </>
              ) : (
                ""
              )}

              {/* <hr /> */}
            </>
          ))}
        </StyledUL>
      </Content>
    </HealthContainer>
  );
}
