import React from 'react';

//local imports 
import Table from '../Table/Table.js';
import TableBody from '../TableBody/TableBody.js';
import TableHeader from '../TableHeader/TableHeader.js';
import Search from '../Search/Search.js';
import Pagination from '../Pagination/Pagination.js';
import Loader from '../Loader/Loader.js';
import './DataTable.css';

const DataTable = ({ loading, columns, data, onSearch, page, onPageSelect }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Events</h5>
        <Search onSearch={onSearch} />
      </div>
      <div className="card-body">
        {
          loading ? <Loader /> : (
            <>
              {
                !loading && data.length <= 0 ? (
                  <div class="alert alert-secondary text-center" role="alert">
                    No records found!
                  </div>
                ) : (
                  <Table>
                    <TableHeader columns={columns} />
                    <TableBody columns={columns} data={data} />
                  </Table>
                )
              }
            </>
          )
        }
      </div>
      <div className="card-footer">
        {
          data.length ? (
            <div className="d-flex justify-content-between align-items-center">
              <Pagination pageData={page} setPageNumber={onPageSelect} />
              <div><b>{page.totalElements}</b> Events</div>
            </div>
          ) :
          (<></>)
        }
      </div>
    </div>
  )
};

export default DataTable;