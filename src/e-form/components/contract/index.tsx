import React from "react";
import { ContractWrapper, StyledTable } from "./styled";

export default function Contract({ body }) {
  return (
    <ContractWrapper>
      <StyledTable>
        <tbody>
          {body.map((row, i) => (
            <tr>
              {row.map((i) => (
                <td>{i}</td>
              ))}
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </StyledTable>
    </ContractWrapper>
  );
}
