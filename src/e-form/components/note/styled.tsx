import styled from "styled-components";

export const NoteWrapper = styled.div`
  width: 1090px;
  margin: 24px 50px 0px;
  border: 1px solid #fed141;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff6d9;
`;

export const NoteTitle = styled.label`
  color: #e87722;
  font-weight: 500;
  font-size: 14px;
`;

export const NoteParagraph = styled.p`
  color: #183028;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 0;
  span {
    color: #e87722;
  }
`;
