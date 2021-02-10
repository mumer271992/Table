import http from './http';

const getList = (params) => {
  return new Promise((resolve, reject) => {
      http.get('/discovery/v2/events.json', { countryCode: 'US', ...params}).then(resp => {
          resolve(resp);
      }).catch(error => {
          console.log(error);
          reject(error);
      })
  })
}

const getDetails = (eventId) => {
  return new Promise((resolve, reject) => {
      http.get(`/discovery/v2/events/${eventId}.json`, {}).then(resp => {
          resolve(resp);
      }).catch(error => {
          console.log(error);
          reject(error);
      })
  })
};

export default {
  getList,
  getDetails
};