import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  // padding: 120px 140px;
`;

export const Title = styled.div`
  background-color: #e87722;
  font-weight: 900;
  font-size: 28px;
  line-height: 32px;
  color: #ffffff;
  margin-top: 40px;
  padding: 16px 51px;
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const SubTitle = styled.p`
  color: #0096a9;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 24px;
`;

export const Wrapper = styled.div`
  margin-top: 124px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Nếu mà dư thì sẽ đẩy xuống */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 84px;
  }
`;
