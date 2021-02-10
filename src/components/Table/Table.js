import React from 'react';

import TableHeader from '../TableHeader/TableHeader.js';

const Table = ({ className, children }) => {
  return (
    <table className={`${className} w-100`}>
      {children}
    </table>
  );
};

export default Table;