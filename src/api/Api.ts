import axios from 'axios';

export const get = (url: string):Promise<object> => {
  return axios.get(url);
};