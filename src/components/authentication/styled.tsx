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

export const NotiFill = styled.p`
  color: #e87722;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const Infomation = styled.form`
  width: 495px;
  height: 20%;
  @media (max-width: 768px) {
    width: 327px;
  }
  // display: flex;
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0096a9;
  display: flex;
  // margin-top: 32px;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
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

export const Demo = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 0px;
  line-height: 22px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  background: #e87722;
  border-radius: 4px;
  padding: 13px 50px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  margin: 45px auto 60px;
  line-height: 24px;
  cursor: pointer;
`;
