import styled from "styled-components";

export const ImgContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  width: 585px;
  height: 408px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(24, 48, 40, 0.15);
  padding: 48px 70px 48px 40px;
  position: relative;
  top: 50px;
  right: 200px;

  @media (max-width: 768px) {
    width: 327px;
    height: 350px;
    padding: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 120px;
  margin-top: 70px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Title = styled.h2`
  width: 475px;
  color: #e87722;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  //   margin-top: 40px;
  @media (max-width: 768px) {
    width: 257px;
    height: 48px;
  }
`;

export const SubTitle = styled.p`
  width: 475px;
  color: #e87722;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  margin-top: 24px;
  @media (max-width: 768px) {
    width: 285px;
    height: 48px;
  }
`;

export const Detail = styled.span`
  width: 394px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-top: 24px;

  @media (max-width: 768px) {
    width: 286px;
    height: 96px;
  }
`;
