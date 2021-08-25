import {handleActions} from 'redux-actions';
import {
  setUserInfoAction,
  removeUserInfoAction,
  setLoginStateAction,
  setLoginUserAction,
  setSaveMusicAction,
  setDataAction,
} from '../action';
// import {} from '../actions';
export const initialState = {
  userInfo: [],
  loginStatus: false,
  user: [],
  isChanged: false,
  albumMusic: [],
  listPlay: [],
  listMusic: [],
};

export default handleActions(
  {
    [setUserInfoAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      userInfo: payload,
    }),
    [removeUserInfoAction.toString()]: (state = initialState, {}) => ({
      ...state,
      ...initialState,
      loginStatus: false,
    }),
    [setLoginStateAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      loginStatus: payload,
    }),
    [setLoginUserAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      user: payload.user,
    }),
    [setSaveMusicAction.toString()]: (state = initialState, {payload}) => ({
      ...state,
      albumMusic: payload,
    }),
    [setDataAction.toString()]: (state, {payload}) => ({
      ...state,
      listMusic: payload,
      listPlay: payload.map((i) => ({
        id: String(i.id),
        url: i.url,
        title: i.name,
        artist: i.singer,
        artwork: i.image,
      })),
    }),
  },
  initialState,
);
