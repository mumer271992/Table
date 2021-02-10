import React from 'react';

const TableRow = ({ children }) => {
  return (<tr className="border-bottom">
    {children}
  </tr>);
};

export default TableRow;