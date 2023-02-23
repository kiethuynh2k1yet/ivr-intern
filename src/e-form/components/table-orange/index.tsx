import React from "react";
import { TableContainer, StyledTable, Title } from "./styled";

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
            <th>Sản phẩm bảo hiểm</th>
            <th>Người được bảo hiểm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>FWD Đón đầu thay đổi 3.0</td>
            <td>Trần Minh Đan</td>
          </tr>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
