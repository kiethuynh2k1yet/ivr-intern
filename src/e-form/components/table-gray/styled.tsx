import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
`;

export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  // border: 1px solid red;

  th,
  td {
    padding: 16px;
  }

  tr td {
    border-top: 1px solid #edeff0;
  }

  tr td:first-child {
    border-left: 1px solid #edeff0;
  }
  tr td:last-child {
    border-right: 1px solid #edeff0;
  }
  tr:last-child td {
    border-bottom: 1px solid #edeff0  ;
  }
  tr:first-child th:first-child {
    border-top-left-radius: 16px;
  }
  tr:first-child th:last-child {
    border-top-right-radius: 16px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 16px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 16px;
  }

  th {
    background: #f8f9f9;
    color: #b3b6b8;
    font-weight: 700;
    font-size: 14px;
  }

  tr {
    color: #b3b6b8;
    font-weight: 450;
    font-size: 14px;
  }

  tr:nth-child(even) {
    background-color: #f8f9f9;
    color: #b3b6b8;
    font-weight: 450;
    font-size: 14px;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #183028;
  margin-bottom: 10px;
`;
