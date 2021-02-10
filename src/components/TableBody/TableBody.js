import React from 'react';
import TableColumn from '../TableColumn/TableColumn.js';

import TableRow from '../TableRow/TableRow.js';

const TableBody = ({ columns, data }) => {
  return (
    <tbody>
      {
        data?.map((row, index) => (
          <TableRow key={index}>
            {
              columns?.map((column, cIndex) => <TableColumn key={cIndex}>{row[column.dataKey]}</TableColumn>)
            }
          </TableRow>
        ))
      }
    </tbody>
  );
};

export default TableBody;