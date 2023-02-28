import React from "react";
import {
  Form8Wrapper,
  Form8Title,
  BodyWrapper,
  Form8User,
  InfoFrom8,
} from "./styled";
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";
import { considerTime1, confirmList } from "pages/utils/listData";

export default function Form81() {
  return (
    <Form8Wrapper>
      <ListItemConsider list={considerTime1} />
      <ListItem list={confirmList} />
    </Form8Wrapper>
  );
}
