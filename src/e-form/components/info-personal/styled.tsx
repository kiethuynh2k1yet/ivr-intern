import styled from "styled-components";

export const MemberInfo = styled.div`
  display: flex;
  padding: 25px 50px;
  justify-content: space-between; 
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 565px;

  h3 {
    color: #e87722;
    padding-bottom: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
  }

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #636566;
  }
`;

export const InfoDetalL = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const InfoDetal = styled.div`
  background: #e87722;
  border-radius: 16px;
  font-weight: 500;

  h4 {
    color: #ffffff;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
  }

  h5 {
    color: #ffffff;
    font-style: normal;
    font-size: 12px;
  }

  h6 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
  }
`;

export const TitleDetal = styled.div`
  display: flex;
  padding-top: 12px;
`;

export const Detal = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
`;
