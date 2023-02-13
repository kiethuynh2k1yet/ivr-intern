import React, { useState } from "react";
import {
  StyledUL,
  StyledLi,
  Container,
  SubContainer,
  Line,
  LineProgress,
  StyledSpan,
} from "./styled";
import { useRouter } from "next/router";
import { data } from "data";
import Link from "next/link";

export default function Stepper({ step }: { step: number }) {
  const router = useRouter();
  return (
    <Container>
      <SubContainer>
        <LineProgress>
          <Line />
          <StyledUL>
            <StyledLi className="active" id="gift">
              <StyledSpan>Chọn quà </StyledSpan>
              {/* Chọn quà */}
            </StyledLi>
            <StyledLi className={step >= 2 ? "active" : ""}>
              <StyledSpan>Thông tin giao quà</StyledSpan>
            </StyledLi>
            <StyledLi className={step >= 3 ? "active" : ""}>
              <StyledSpan>Xác nhận</StyledSpan>
            </StyledLi>
          </StyledUL>
        </LineProgress>
      </SubContainer>
    </Container>
  );
}
