import React from "react";
import {
  StyledUL,
  StyledLi,
  Container,
  SubContainer,
  ProgressWrap,
  Line,
  LineProgress,
  StyledPick,
  StyledSpan,
  StyledConfirm,
} from "./styled";
import { useRouter } from "next/router";
import { data } from "data";
export default function Stepper() {
  const router = useRouter();
  const id = router.query;
  const pathName = router.pathname;
  console.log(pathName);
  return (
    <Container>
      <SubContainer>
        <ProgressWrap>
          <LineProgress>
            <Line />

            <StyledUL>
              <StyledLi className="active" id="gift">
                <StyledPick>Chọn quà</StyledPick>
                {/* Chọn quà */}
              </StyledLi>
              {pathName === `gift/${id}` ? (
                ""
              ) : (
                <StyledLi className="active" id="delivery">
                  <StyledSpan>Thông tin giao quà</StyledSpan>
                </StyledLi>
              )}
              {pathName === `confirm/${id}` ? (
                ""
              ) : (
                <StyledLi className="active" id="confirm">
                  <StyledConfirm>Xác nhận</StyledConfirm>
                </StyledLi>
              )}
            </StyledUL>
          </LineProgress>
        </ProgressWrap>
      </SubContainer>
    </Container>
  );
}
