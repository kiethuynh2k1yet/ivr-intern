import React from "react";
import { ListContainer, ListTitle, StyledUL } from "./styled";
export default function ListItem({ list }) {
  console.log(list.map((i) => i.list.map((i) => i)));
  return (
    <ListContainer>
      {list.map((i, index) => (
        <ListTitle key={index} dangerouslySetInnerHTML={{ __html: i.title }} />
      ))}

      <StyledUL>{list.map((i) => i.list.map((i) => <li>{i}</li>))}</StyledUL>
    </ListContainer>
  );
}
