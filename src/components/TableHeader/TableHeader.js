import React from 'react';
import TableRow from '../TableRow/TableRow.js';
import TableColumn from '../TableColumn/TableColumn.js';

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <TableRow>
        {
          columns?.map((column, index) => <TableColumn key={index} className="font-weight-bold">{column.name}</TableColumn>)
        }
      </TableRow>
    </thead>
  );
};

export default TableHeader;