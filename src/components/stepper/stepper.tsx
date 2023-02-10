import React, { useState } from "react";
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
import Link from "next/link";

export default function Stepper({ step }: { step: number }) {
  const router = useRouter();
  const { id } = router.query;
  const pathName = router.asPath;
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Container>
      <SubContainer>
        <ProgressWrap>
          <LineProgress>
            <Line />
            <StyledUL>
              <StyledLi className="active" id="gift">
                <StyledPick>Chọn quà </StyledPick>
                {/* Chọn quà */}
              </StyledLi>
              <StyledLi className={step >= 2 ? "active" : ""}>
                <StyledSpan>Thông tin giao quà</StyledSpan>
              </StyledLi>
              <StyledLi className={step >= 3 ? "active" : ""}>
                <StyledConfirm>Xác nhận</StyledConfirm>
              </StyledLi>
            </StyledUL>
          </LineProgress>
        </ProgressWrap>
      </SubContainer>
    </Container>
  );
}
