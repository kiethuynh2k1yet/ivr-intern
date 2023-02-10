import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  background-color: #e87722;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
  color: white;
  line-height: 32px;
`;
export const Wrapper = styled.div`
  background-color: #f7f7f7;
`;
export const WrapperFill = styled.div`
  width: 414px;
  height: 54px;
`;
export const NotiFill = styled.p`
  color: #000000;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding-top: 24px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0096a9;
  display: flex;
  justify-content: center;
  // margin-top: 32px;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  border: 0;
  outline: 0;
  font-style: normal;
  color: #5f6c68;
  padding-bottom: 12px;
  border-bottom: 1px solid #c1c8c6;
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledForm = styled.form`
  width: 495px;
  height: 20%;
  @media (max-width: 768px) {
    width: 327px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 0 30px 40px;
`;

export const StyledButton = styled.button`
  background: #e87722;
  border-radius: 4px;
  padding: 13px 32px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  width: 206px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const OTPButton = styled.button`
  background: #8c8c8c;
  border-radius: 4px;
  padding: 13px 32px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  width: 206px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  &:disabled {
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const OTPGroup = styled.div`
  display: flex;
  justify-content: center;
  // width: 100%;
  // max-width: 360px;
  column-gap: 5px;
  // padding: 0;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #c1c8c6;
`;

export const OTPInput = styled.input`
  width: 15px;
  height: 17px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  padding: 0;
  color: #5f6c68;
  // border-bottom: 2px solid #5f6c68;
`;

export const OTPTimer = styled.div`
  color: #e87722;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-top: 2px;
  margin-bottom: 24px;
`;
