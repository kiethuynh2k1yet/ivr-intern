import React from "react";
import {
  ListContainer,
  ListLabel,
  ListTitle,
  StyledUL,
  StyledP,
} from "./styled";
import { ListData } from "pages/utils/listData";
interface ListDataProps {
  list: ListData[];
}

export default function ListItemConsider({ list }: ListDataProps) {
  return (
    <ListContainer>
      <ListLabel>Lưu ý</ListLabel>
      <div>
        {list.map((i, index) => (
          <div key={index} style={{ marginTop: "10px" }}>
            <ListTitle>{i.title}</ListTitle>
            <StyledUL>
              {i.list?.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </StyledUL>
            {i.confirm ? (
              <StyledP dangerouslySetInnerHTML={{ __html: i.confirm }} />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </ListContainer>
  );
}
