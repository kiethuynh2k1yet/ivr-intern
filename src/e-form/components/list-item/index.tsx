import React from "react";
import { ListContainer, ListTitle, StyledUL } from "./styled";
import { ListData } from "pages/utils/listData";
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
    // <div
    //   style={{
    //     background: "#edeff0",
    //     borderRadius: "16px",
    //     padding: "16px",
    //     marginTop: "20px",
    //   }}
    // >
    //   {list.map((i, index) => (
    //     <div
    //       style={{ fontWeight: 500, fontSize: "14px", color: "#183028" }}
    //       key={index}
    //       dangerouslySetInnerHTML={{ __html: i.title }}
    //     />
    //   ))}

    //   <div style={{ margin: "0", paddingTop: "10px", paddingLeft: "20px" }}>
    //     {list.map((i) => i.list.map((i, index) => <li key={index}>{i}</li>))}
    //   </div>
    // </div>
  );
}
