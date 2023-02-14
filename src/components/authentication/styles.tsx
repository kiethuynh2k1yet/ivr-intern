import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wapper = styled.form`
  width: 960px;
  height: 532px;
  margin: 60px 240px 137px 240px;

  @media (max-width: 768px) {
    margin: 47px 24px 16px 24px;
    width: 338px;
    height: 240px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 48px;
  color: #f68b1f;
`;

export const Info = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const InfoTitle = styled.p`
  margin-top: 24px;
  width: 253px;
  height: 48px;
  color: #212529;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const InputInfoTitle = styled.div`
  padding-left: 16px;
  width: 250px;
  height: 48px;
  margin-top: 24px;
  background: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  color: #495057;
  display: flex;
  item-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px;
  }

  &.errorInfo {
    border: 1px solid red;
  }
`;

export const Demo = styled.h6`
  font-style: normal;
  color: #808080;
  margin-left: 32px;
  margin-top: 36px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 4px;
    margin-left: 0px;
    margin-bottom: 16px;
  }
`;

export const Description = styled.div`
  width: 960px;
  height: 192px;
  margin-top: 24px;
`;

export const DesTitle = styled.p`
  color: #212529;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
`;

export const Checkmark = styled.span`
  height: 18px;
  width: 18px;
  background-image: url(${process.env.basePath}/images/checkFalse.svg);
  &.errorCheckbox {
    background-image: url(${process.env.basePath}/images/checkError.svg);
  }
  &:after {
    content: "";
    display: none;
    width: 18px;
    height: 18px;
    background-image: url(${process.env.basePath}/images/checkTrue.svg);
    background-size: 100%;
  }
`;

export const DesCheckBox = styled.button`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  margin-left:0px;
  height: 18px;
  width: 18px;

  & ~ ${Checkmark} {
  }
  &:checked ~ ${Checkmark}::after {
    display: block;
  }
`;

export const InputInfo = styled.div`
  margin-left: 32px;

  @media (max-width: 768px){
    margin-left:0px;
  }
`;

export const StyleBtn = styled.button`
  width: 200px;
  height: 50px;
  align-items: center;
  padding: 13px 32px;
  background: #ff7043;
  border-radius: 4px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 32px;
  margin-bottom: 107px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
`;

export const ColorDesHighLight = styled.span`
  color: #f68b1f;
`;

export const CheckTitle = styled.p`
  color: #212529;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;

  &.errorCheckbox {
    color: #ff3547;
  }
`;

export const CheckInfo = styled.div`
  display: flex;
  align-items: center;
`;