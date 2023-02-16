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
          {body.map((row, i) => (
            <tr key={i}>
              {row.map((row, index) => (
                <td key={index}>{row}</td>
              ))}
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </StyledTable>
    </ContractWrapper>
  );
}
