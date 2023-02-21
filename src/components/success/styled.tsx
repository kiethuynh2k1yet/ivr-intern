import styled from "styled-components";

export const ImgContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  padding-bottom: 100px;
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

export const DescContainer = styled.div`
  width: 585px;
  padding: 48px 70px 48px 40px;
  height: 408px;
  position: relative;
  right: 120px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(24, 48, 40, 0.15);

  @media (max-width: 768px) {
    width: 327px;
    height: 350px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    padding: 48px 20px 40px 21px;
    background: #ffffff;
    bottom: 50px;
    right: 0;
    // margin: 0 24px 0 24px;
    box-shadow: 0px 0px 20px rgba(24, 48, 40, 0.15);
  }
`;
export const Title = styled.h2`
  width: 475px;
  color: #e87722;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  @media (max-width: 768px) {
    width: 260px;
    height: 48px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
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
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
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
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
