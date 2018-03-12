import axios from 'axios'
import store from '../store/reduxstore'


const instance = axios.create({
  baseURL:'http://127.0.0.1:5000/',
  timeout:1000,
  headers:{
    Accept:'application/json',
    ContentType:'application/json'
  }
});

instance.interceptors.request.use(function(config){
  const { token_ } = store.getState().auth;
  if (token_){
    config.headers.Authorization = '${token_}'
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config
})

export default instance;
