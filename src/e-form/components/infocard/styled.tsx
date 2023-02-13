import styled from "styled-components";

export const Container = styled.div`
  width: 499px;
  height: 126px;
  background: #f8f9f9;
  border-radius: 12px;
  padding: 16px;
`;

export const Wrapper = styled.div`
  width: 467px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 140px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoTitle = styled.p`
  color: #636566;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
`;

export const InfoDetail = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #e87722;
  margin: 0;
`;
