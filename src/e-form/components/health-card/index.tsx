import React from "react";
import { HealthCardData } from "utils/healthData";
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
        {data.map((i, index) => (
          <React.Fragment key={index}>
            <StyledUL>
              <StyledLi key={index}>
                <span>{index + 1}.</span>
                {i.label}
                <h6>{i.value}</h6>
              </StyledLi>

              {i.children ? (
                <ul style={{ padding: 0, listStyle: "none" }}>
                  {i.children?.map((i, index) => (
                    <RowChildren key={index}>
                      <ChildrenLi>
                        {i.label}
                        <h6>{i.value}</h6>
                      </ChildrenLi>
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
            </StyledUL>
            <hr />
          </React.Fragment>
        ))}
      </Content>
    </HealthContainer>
  );
}
