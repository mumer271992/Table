import React from 'react';
import './PaginationItem.css';

const PaginationItem = (props) => {
  return (
    <li class={`page-item ${props.active ? 'active' : ''}`}>
      <button type="button" class="btn btn-link" {...props}>{props.children}</button>
    </li>
  );
};

export default PaginationItem;