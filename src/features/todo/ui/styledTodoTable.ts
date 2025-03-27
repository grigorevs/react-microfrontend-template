import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const StyledTableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
  width: 33.33%;
  word-break: break-word;
`;

export const StyledTableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
  word-break: break-word;
`;

export const StyledInput = styled.input`
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledSelect = styled.select`
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
