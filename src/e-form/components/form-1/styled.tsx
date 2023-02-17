import styled from "styled-components";

export const Form1Wrapper = styled.div`
  width: 1090px;
  margin: 0px 50px;
  padding: 20px;

  background: #ffffff;
  border: 1px solid #dbdfe1;
  border-radius: 16px;
`;

export const Form1Title = styled.h6`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 20px;
  color: #183028;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  padding: 16px;

  display: flex;
  flex-direction: column;

  background: #ffffff;
  border: 1px solid #dbdfe1;
  border-radius: 16px;
`;

export const Form1User = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const InfoTitle = styled.h6`
  font-weight: 700;
  font-size: 16px;
  color: #183028;
  margin-bottom: 10px;
`;

export const ListContainer = styled.div`
  background: #edeff0;
  border-radius: 16px;
`;
