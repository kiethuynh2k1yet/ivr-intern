import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  background-color: #e87722;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
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

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledForm = styled.form`
  width: 495px;
  height: 77px;
  @media (max-width: 768px) {
    width: 327px;
    height: 194px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

export const StyledButton = styled.button`
  width: 200px;

  background: #e87722;
  border-radius: 4px;
  padding: 13px 32px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  //   margin: 45px auto 60px;

  line-height: 24px;
  cursor: pointer;
`;

export const OTPButton = styled.button`
  //   width: 200px;
  background: #8c8c8c;
  border-radius: 4px;
  padding: 13px 32px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  color: white;
  //   margin: 45px auto 60px;
  //   line-height: 24px;
  cursor: pointer;
  margin-right: 24px;
`;

export const OTPGroup = styled.div`
  display: flex;
  justify-content: center;
  // width: 100%;
  // max-width: 360px;
  // column-gap: 5px;
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
`;
