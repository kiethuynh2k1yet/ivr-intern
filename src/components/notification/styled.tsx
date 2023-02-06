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
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 60px;
`;

export const Paragraph = styled.p`
  width: 504px;
  height: 10%;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 768px) {
    width: 336px;
      }
`;
