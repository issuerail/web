import axios from 'axios';

export function requestDel(url) {
  return axios.delete(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(({ data }) => {
    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data.result;
  });
}

export function requestGet(url) {
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(({ data }) => {
    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data.result;
  });
}

export function requestPost(url, body) {
  return axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(({data}) => {
    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data.result;
  });
}

export function requestPut(url, body) {
  return axios.put(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(({ data }) => {
    if (data.error) {
      console.log(data.error);
      throw data.error;
    }
    return data.result;
  });
}

export function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
