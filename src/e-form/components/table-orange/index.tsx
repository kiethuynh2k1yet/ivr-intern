import React from "react";
import { TableContainer, StyledTable, Title  } from "./styled";

interface TableDataProps {
  title: string;
}
export default function TableOrange({ title }: TableDataProps) {
  return (
    <TableContainer>
      <Title>{title}</Title>
      <StyledTable>
        <thead>
          <tr>
            <th>STT</th>
            <th>STT</th>
            <th>STT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>01</td>
            <td>01</td>
            
          </tr>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
