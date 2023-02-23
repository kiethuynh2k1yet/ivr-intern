import React from "react";
import { TableContainer, StyledTable, Title } from "./styled";

interface TableDataProps {
  title: string;
}
export default function TableGray({ title }: TableDataProps) {
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
            <td>
              <div>01</div>
            </td>
            <td>
              <div>01</div>
            </td>
            <td>01</td>
          </tr>
          <tr>
            <td>01</td>
            <td>01</td>
            <td>01</td>
          </tr>
          <tr>
            <td>01</td>
            <td>01</td>
            <td>01</td>
          </tr>
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
