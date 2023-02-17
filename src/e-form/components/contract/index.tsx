import React from "react";
import { ContractWrapper, StyledTable, Title } from "./styled";

interface ContractProps {
  title: string;
  body: string[][];
}
export default function Contract({ title, body }: ContractProps) {
  return (
    <ContractWrapper>
      <Title>{title}</Title>
      <StyledTable>
        <tbody>
          {body.map((row, id) => (
            <tr key={id}>
              {row.map((row, index) => (
                <td key={index}>{row}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </ContractWrapper>
  );
}
