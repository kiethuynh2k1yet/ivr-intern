import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
`;

export const SubContainer = styled.div``;

export const Wrapper = styled.div`
  width: 900px;
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
`;

export const StyledOption = styled.option``;

export const StyledInput = styled.input`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #5f6c68;
`;

export const StyledNote = styled.p`
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  text-decoration-line: underline;

  color: #5f6c68;
`;

export const Agree = styled.p`
  color: #5f6c68;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
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
    top: 100px;
    left: 0;
    width: 100%;
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
