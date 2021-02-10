import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../api';
import Loader from '../components/Loader/Loader.js';

const EventDetails = () => {
  const { eventId } = useParams();
  const [state, setState] = useState({
    loading: false,
    data: {}
  })
  useEffect(() => {
    if (eventId) {
      setState((cState) => ({ ...cState, loading: true }));
      api.events.getDetails(eventId).then(resp => {
        setState({ loading: false, data: resp });

      }).catch(error => {
        console.log(error);
        setState((cState) => ({ ...cState, loading: false }));
      })
    }
  }, [])
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">Event details</h5>
          <a href={state.data.url} target="_blank">Buy Ticket</a>
        </div>
        {
          state.loading ?
            (<Loader />) : (
              <div className="card-body">
              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <b>Name: </b> {state.data.name}
                </div>
                <div className="col-sm-6">
                  <b>Price: </b> {`${state.data.priceRanges?.[0].min}-${state.data.priceRanges?.[0].max} (${state.data.priceRanges?.[0].currency})`}
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-sm-6">
                  <b>Ticket Limit: </b> {state?.data?.accessibility?.ticketLimit}
                </div>
                <div className="col-sm-6">
                  <b>Date: </b> {state?.data?.dates?.initialStartDate?.localDate}
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-sm-12">
                  <b>Note: </b> {state.data.pleaseNote}
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-sm-12">
                  <b>Info: </b> {state.data.info}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default EventDetails;