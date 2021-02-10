import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Local imports
import DataTable from '../components/DataTable/DataTable.js';
import api from '../api';

const PAGE_SIZE = 10;

const Events = () => {
  const [state, setState] = useState({
    loading: false,
    page: {},
    events: []
  });
  const [page, setPage] = useState(0);
  const renderCustomAction = (id) => (<Link to={`/events/${id}`}>View</Link>)
  const columns = [
    {
      name: "Event",
      dataKey: "name"
    },
    {
      name: "Price",
      dataKey: "price"
    },
    {
      name: "Actions",
      dataKey: "action"
    }
  ];

  const fetchEvents = (params) => {
    setState((cState) => ({ ...cState, loading: true }));
    api.events.getList({ ...params, size: PAGE_SIZE }).then(resp => {
      setState((cState) => ({ ...cState, loading: false }))
      const newState = {};
    
      if (resp?.page) {
        newState.page = {...resp.page};
      }
      if (resp?._embedded?.events) {
        newState.events = [...resp._embedded.events];
        newState.events = newState.events.map(event => ({ id: event.id, name: event.name, price: `${event?.priceRanges?.[0]?.min} - ${event?.priceRanges?.[0]?.max} (${event?.priceRanges?.[0]?.currency})`, action: renderCustomAction(event.id) }));
      } else {
        newState.events = [];
      }
      setState((cState) => ({ ...cState, ...newState }));
    }).catch((err) => {
      console.log("Error: ", err);
      setState((cState) => ({ ...cState, loading: false }));
    });
  }

  const searchHandler = (query) => {
    fetchEvents({ keyword: query, page: 0 });
  }

  useEffect(() => {
    fetchEvents({ page })
  }, [page]);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (<div className="container mt-3">
    <DataTable
      loading={state.loading}
      columns={columns}
      data={state.events}
      page={state.page}
      onSearch={searchHandler}
      onPageSelect={setPage}
    />
  </div>);
};

export default Events;