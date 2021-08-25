import axios from 'axios';
import {API, token} from '../api/common';
import {END_POINT} from '../../constants/api';
export const loginService = async (body_api) => {
  // console.log('bước 3: sau khi nhận action từ saga, sẽ gọi api');
  let result = null;
  await axios
    .get(`${END_POINT}id/login`, body_api, {headers: {Authorization: token}})
    .then(function (response) {
      // console.log(
      //   'bước 4: nếu gọi API thành công thì tra ve response cho saga ',
      // );
      // chua return
      result = response.data;
    })
    .catch(function (error) {
      // console.log('goi ap bi loi', error);
    });
  // return kết quả của việc gọi api
  return result;
};
export const registrationService = async (body_api) => {
  // console.log('bước 3: sau khi nhận action từ saga, sẽ gọi api');
  let result = null;
  await axios
    .post(`${END_POINT}`, body_api, {headers: {Authorization: token}})
    //API sử dụng sẽ thay thế
    .then(function (response) {
      // console.log(
      //   'bước 4: nếu gọi API thành công thì tra ve response cho saga ',
      // );
      // chua return
      result = response.data;
    })
    .catch(function (error) {
      // console.log('goi ap bi loi', error);
    });
  // return kết quả của việc gọi api
  return result;
};
//  default {
//   loginService,
//   registrationService,
// }
export const forgetPassService = async (body_api) => {
  // console.log('bước 3: sau khi nhận action từ saga, sẽ gọi api');
  // let result = null;
  await axios
    .post(`${END_POINT}id/change-password`, body_api, {
      headers: {Authorization: token},
    })
    //API sử dụng sẽ thay thế
    .then(function (response) {
      // console.log(
      //   'bước 4: nếu gọi API thành công thì tra ve response cho saga ',
      // );
      // chua return
      result = response.data;
    })
    .catch(function (error) {
      // console.log('goi ap bi loi', error);
    });
  // return kết quả của việc gọi api
  return result;
};
export const fetchAsyncService = async (endpoint) => {
  try {
    let response = await fetch(
      `https://fakeserver-musicaap.herokuapp.com/${endpoint}`,
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};
