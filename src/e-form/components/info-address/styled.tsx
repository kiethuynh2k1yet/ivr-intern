import styled from "styled-components";

export const MemberInfo = styled.div`
  display: flex;
  padding: 25px 50px;
  justify-content: space-between;
`;

export const TitleInfo = styled.div`
  width: 585px;

  h3 {
    color: #e87722;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 125%;
  }

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const ColorArrge = styled.label`
  color: #e87722;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const InfoDetal = styled.div`
  background: #e87722;
  border-radius: 16px;
  padding: 20px;

  h5 {
    color: #ffffff;
  }
`;

export const Detal = styled.div`
  display: flex;
  align-items: center;

  h5 {
    width: 160px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 125%;
    color: #ffffff;
    margin-top: 16px;
  }

  h6 {
    width: 160px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 125%;
    color: #ffffff;
    margin-top: 4px;
  }
`;