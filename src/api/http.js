/* eslint-disable object-shorthand */
import axios from 'axios';

const http = {
  base_url: process.env.REACT_APP_API_BASE_URL,
  api_key: process.env.REACT_APP_API_KEY,

  setDefaultHeader: (name, value) => {
    axios.defaults.headers.common[name] = value;
  },

  appendApiKey: function(url) {
    return `${url}&apikey=${this.api_key}`
  },

  getList: function (endpoint, params) {
    const url = `${this.base_url}${endpoint}`;
    const config = {};
    config.params = { ...params, apikey: this.api_key };
    return axios.get(url, config).then((resp) => resp.data);
  },

  get: function (endpoint, params, isFullURL = false) {
    let url = `${this.base_url}${endpoint}`;
    if (isFullURL) {
      url = endpoint;
    }
    const config = {};
    config.params = { ...params, apikey: this.api_key };;

    return axios.get(url, config).then((resp) => resp.data);
  },

  post: function (endpoint, data, queryParams) {
    const url = `${this.base_url}${endpoint}`;
    const config = {};
    if (queryParams) {
      config.params = { ...queryParams, apikey: this.api_key };;
    }
    return axios.post(url, data, config).then((resp) => resp.data);
  },

  put: function (endpoint, data) {
    const url = `${this.base_url}${endpoint}`;
    const config = {};
    return axios.put(url, data, config).then((resp) => resp.data);
  },

  delete: function (endpoint, params) {
    const url = `${this.base_url}${endpoint}`;
    const config = {};
    config.params = { ...params, apikey: this.api_key };;
    return axios.delete(url, config).then((resp) => resp.data);
  },
};

export default http;
