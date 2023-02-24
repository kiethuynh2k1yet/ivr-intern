import React from "react";
import { TableContainer, StyledTable, Title } from "./styled";

interface TableDataProps {
  title: string;
  heading: string[];
  content: string[][];
}
export default function TableGray({ title, heading, content }: TableDataProps) {
  return (
    <TableContainer>
      <Title>{title}</Title>
      <StyledTable>
        <thead>
          <tr>
            {heading.map((head, headID) => (
              <th key={headID}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((row, id) => (
            <tr key={id}>
              {row.map((row, index) => (
                <td key={index} dangerouslySetInnerHTML={{ __html: row }} />
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
