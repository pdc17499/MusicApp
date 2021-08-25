import {createActions} from 'redux-actions';

const actions = createActions({
  FETCH_ASYNC_ACTION: (body_api) => body_api,
  LOGIN_ACTION: (body_api) => body_api,
  CHANGE_PASS_ACTION: (body_api) => body_api,
  REGISTRATION_ACTION: (body_api) => body_api,
  FORGET_PASS_ACTION: (body_api) => body_api,
  SET_USER_INFO_ACTION: null,
  REMOVE_USER_INFO_ACTION: null,
  SET_LOGIN_STATE_ACTION: null,
  SET_LOGIN_USER_ACTION: null,
  SET_SAVE_MUSIC_ACTION: null,
  SET_DATA_ACTION: null,
});

export const {
  fetchAsyncAction,
  loginAction,
  changePassAction,
  registrationAction,
  setUserInfoAction,
  removeUserInfoAction,
  forgetPassAction,
  setLoginStateAction,
  setLoginUserAction,
  setSaveMusicAction,
  setDataAction,
} = actions;
