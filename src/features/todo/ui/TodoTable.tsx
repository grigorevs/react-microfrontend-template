import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledTableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
  width: 33.33%;
`;

const TodoTable = () => {
  return (
    <div>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <StyledTableHeader>ID</StyledTableHeader>
              <StyledTableHeader>Title</StyledTableHeader>
              <StyledTableHeader>Completed</StyledTableHeader>
            </tr>
          </thead>
          <tbody
            style={{
              height: '400px',
              width: '100%',
              overflow: 'auto',
              display: 'block',
              position: 'relative',
            }}
          ></tbody>
        </StyledTable>
      </TableContainer>
    </div>
  );
};

export default TodoTable;
