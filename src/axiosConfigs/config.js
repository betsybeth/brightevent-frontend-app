import axios from 'axios';

const url = 'http://127.0.0.1:5000/';

const instance = axios.create({
  baseURL:url,
  timeout: 10000,
  headers:{
    Accept:'application/json',
    ContentType:'application/json'
  }
});

instance.interceptors.request.use(function(config){
  // access the token from the stored data
  const token_ = localStorage.getItem('token');
  if (token_){
    config.headers.Authorization = `${token_}`;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export default instance;
