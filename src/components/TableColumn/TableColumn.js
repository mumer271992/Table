import React from 'react';
import './TableColumn.css';

const TableColumn = ({ className, children }) => {
  return (<td className={`${className} table-cell`}>{children}</td>)
};

export default TableColumn;