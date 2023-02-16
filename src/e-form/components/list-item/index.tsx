import React from "react";
import { ListContainer, ListTitle, StyledUL } from "./styled";
import { ListData } from "listData";
interface ListDataProps {
  list: ListData[];
}

export default function ListItem({ list }: ListDataProps) {
  return (
    <ListContainer>
      {list.map((i, index) => (
        <ListTitle key={index} dangerouslySetInnerHTML={{ __html: i.title }} />
      ))}

      <StyledUL>
        {list.map((i) => i.list.map((i, index) => <li key={index}>{i}</li>))}
      </StyledUL>
    </ListContainer>
  );
}
