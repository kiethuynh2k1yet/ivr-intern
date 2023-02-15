import React from "react";
import { Form3Wrapper, Form3Title, BodyWrapper, Form3User } from "./styled";
import InfoCard from "e-form/components/info-card/index";
import { fatca, infoData } from "infoData";
import { updateList, confirmList } from "listData";
import ListItem from "../list-item";
import NoteForm from "../note";

export default function Form3() {
  return (
    <>
      <Form3Wrapper>
        <Form3Title>Thông tin được yêu cầu điều chỉnh như sau:</Form3Title>
        <BodyWrapper>
          <Form3User>
            <InfoCard title="Thông tin cá nhân" data={infoData} />
            <InfoCard title="Đạo luật FATCA" data={fatca} />
          </Form3User>
        </BodyWrapper>

        <ListItem list={confirmList} />
      </Form3Wrapper>
      <NoteForm />
    </>
  );
}
