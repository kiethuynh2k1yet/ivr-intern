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
            <th>Sản phẩm bảo hiểm</th>
            <th>Người mua bảo hiểm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>FWD Đón đầu thay đổi 3.0</td>
            <td>Trần Minh Đan</td>
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
