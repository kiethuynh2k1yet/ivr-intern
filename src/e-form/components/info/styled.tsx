import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 50px 24px;
    display: flex;
    flex-direction: column;
`;

export const Wapper = styled.div`
    display: flex;
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