import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
`;

export const SubContainer = styled.div``;

export const Wrapper = styled.div`
  width: 900px;
  height:506px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(24, 48, 40, 0.15);
  padding: 40px 112px 0 240px;
  @media (max-width: 768px) {
   padding:0;
   width:500px;
   position:relative;
   top:300px;
`;

export const Desc = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #5f6c68;
  width: 548px;
  height: 48px;
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
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #5f6c68;
  margin-top: 16px;
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
export const Agree = styled.label`
  color: #5f6c68;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  &: ${Agree}:before {
    content: "\123";
    border: 0.1em solid red;
    border-radius: 0.2em;
    display: inline-block;
    width: 1em;
    height: 1em;
    padding-left: 0.2em;
    padding-bottom: 0.3em;
    margin-right: 0.2em;
    vertical-align: bottom;
    color: transparent;
    transition: 0.2s;
  }
  border: 1px solid #0096a9;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
  position: relative;
  top: 25px;
  cursor: pointer;
`;

export const OrangeWrapper = styled.div`
  position: absolute;
  width: 431px;
  height: 369px;
  left: 818px;
  top: 339px;
  display: flex;
  align-items: flex-end;
  background: #e87722;
  @media (max-width: 768px) {
    top: 280px;
    left: 0;
    width: 375px;
    height: 282px;
  }
`;
export const GiftContainer = styled.div`
  margin-left: 48px;
  margin-bottom: 24px;
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
`;
