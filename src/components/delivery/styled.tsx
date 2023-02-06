import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const SubContainer = styled.div``;

export const Wrapper = styled.form`
  width: 900px;
  height:55%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(24, 48, 40, 0.15);
  padding: 40px 112px 0 240px;
  @media (max-width: 768px) {
   padding:0;
   width: 100%;
   position:relative;
   top:345px;
   padding-left:24px;
   padding-top:24px;
`;

export const Desc = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #5f6c68;
  width: 548px;
  font-style: normal;

  height: 48px;
  @media (max-width: 768px) {
    width: 80vw;
    height: 72px;
  }
`;

export const StyledLabel = styled.label`
  color: #0096a9;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  margin-top: 24px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border-bottom: 1px solid black;
  color: #5f6c68;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  padding-bottom: 12px;
  margin-top: 16px;
  appearance: menulist;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #5f6c68;
  margin-top: 16px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const GiftInput = styled.input`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  border: 0;
  outline: 0;
  font-style: normal;
  color: #5f6c68;
  padding-top: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #c1c8c6;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const StyledNote = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */
  margin-top: 24px;

  color: #5f6c68;
`;
export const Underline = styled.span`
  text-decoration-line: underline;
`;

export const CheckContainer = styled.div`
  margin-top: 24px;
`;
export const StyledCheckbox = styled.input``;
export const Agree = styled.label`
  color: #5f6c68;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  position: relative;
  top: 20px;
`;

export const StyledButton = styled.button`
  background: #e87722;
  border-radius: 4px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 13px 32px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;

  cursor: pointer;
`;

export const OrangeWrapper = styled.div`
  position: absolute;
  width: 431px;
  height: 369px;
  left: 818px;
  top: 320px;
  display: flex;
  align-items: flex-end;
  background: #e87722;
  @media (max-width: 768px) {
    top: 280px;
    left: 0;
    width: 100%;
    height: 282px;
  }
`;
export const GiftContainer = styled.div`
  margin-left: 48px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    margin-left: 24px;
  }
`;
export const GiftTitle = styled.p`
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`;

export const SubGiftTitle = styled.p`
  color: #000000;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
`;
