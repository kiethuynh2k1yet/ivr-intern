import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
`;

export const StyledTable = styled.table`
  border-spacing: 0;
  width: 100%;
  border-collapse: separate;
  table-layout: auto;

  th,
  td {
    padding: 16px;
    max-width: 100%;
    white-space: nowrap;
    text-align: left;
    position: relative;
  }

  th:not(:first-child)::after {
    content: "";
    background-color: #b3b6b8;
    position: absolute;
    right: 100%;
    top: 18px;
    bottom: 18px;
    width: 2px;
  }

  td:not(:first-child)::after {
    content: "";
    background-color: #edeff0;
    position: absolute;
    right: 100%;
    top: 18px;
    bottom: 18px;
    width: 2px;
  }

  tr th:first-child {
    width: 5%;
  }
  tr th:last-child {
    width: 35%;
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
    border-bottom: 1px solid #edeff0;
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
    font-weight: 500;
    font-size: 14px;
  }

  tr:nth-child(even) {
    background-color: #f8f9f9;
    color: #b3b6b8;
    font-weight: 500;
    font-size: 14px;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #183028;
  margin-bottom: 10px;
`;
