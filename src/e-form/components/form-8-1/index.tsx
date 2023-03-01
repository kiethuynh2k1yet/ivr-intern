import React from "react";
import { considerTime1, confirmList } from "utils/listData";

import { Form8Wrapper } from "./styled";
import ListItemConsider from "./../list-item-consider/index";
import ListItem from "./../list-item/index";

export default function Form81() {
  return (
    <>
      <Form8Wrapper style={{ marginTop: "20px" }}>
        <ListItemConsider list={considerTime1} />
        <ListItem list={confirmList} />
      </Form8Wrapper>
    </>
  );
}
