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
export default function Stepper() {
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
              <StyledLi id="delivery">
                <StyledSpan>Thông tin giao quà</StyledSpan>
              </StyledLi>

              <StyledLi id="confirm">
                <StyledConfirm>Xác nhận</StyledConfirm>
              </StyledLi>
            </StyledUL>
          </LineProgress>
        </ProgressWrap>
      </SubContainer>
    </Container>
  );
}
