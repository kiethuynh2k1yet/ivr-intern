import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
  border: 1px solid black;
`;

export const SubContainer = styled.div`
  display: flex;
  & :nth-child(2) {
    align-self: flex-end;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    & :nth-child(2) {
      margin: auto;
    }
  }
`;
export const OrangeWrapper = styled.div`
  width: 431px;
  height: 369px;
  background: #e87722;
  postion
`;
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
  margin-bottom: 32px;

  height: 48px;
  @media (max-width: 768px) {
    width: 90vw;
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

export const LabelCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const Checkmark = styled.span`
  position: absolute;
  top: 3px;
  left: 0;
  height: 18px;
  width: 18px;
  background-image: url(${process.env.basePath}/images/border.svg);
  &:after {
    content: "";
    position: absolute;
    display: none;

    left: 4px;
    top: 5px;
    width: 11.25px;
    height: 7.88px;
    background-image: url(${process.env.basePath}/images/checkmark.svg);
    background-size: 100%;
  }
`;
export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  & ~ ${Checkmark} {
    // border: 2px solid #0096a9;
    // border-radius: 2px;
  }
  &:checked ~ ${Checkmark}::after {
    display: block;
  }
`;

export const CheckContainer = styled.div`
  margin-top: 24px;
`;

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
  &:disabled {
    background: #8c8c8c;
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

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 70px;
`;

export const ErrorMess = styled.div`
  color: #ff0000;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`;
