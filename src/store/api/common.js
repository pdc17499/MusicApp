import {create} from 'apisauce';
import {API_TIMEOUT, END_POINT} from '../../constants/api';

// Create base http request use apisauce - base from axios -- https://github.com/infinitered/apisauce
const API = create({
  baseURL: END_POINT,
  timeout: API_TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaXRlaWQiOiI1Zjc3ZTkxZDA2ZWQzZjIxNzY2YmU4YzEiLCJ0aW1lIjoxNjAxNjk1OTA3fQ.xmAEctqPv2cjeBT4XSF9zoKS8vLl3wkzEbB98bxnM3Y';

export {API, token};
