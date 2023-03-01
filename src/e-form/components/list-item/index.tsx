import { ListContainer, ListTitle, StyledUL } from "./styled";
import { ListData } from "utils/listData";
interface ListDataProps {
  list: ListData[];
}

export default function ListItem({ list }: ListDataProps) {
  return (
    <ListContainer>
      <div>
        {list.map((i, index) => (
          <div key={index}>
            <ListTitle
              key={index}
              dangerouslySetInnerHTML={{ __html: i.title }}
            />
            <StyledUL>
              {i.list.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </StyledUL>
          </div>
        ))}
      </div>
    </ListContainer>
  );
}
