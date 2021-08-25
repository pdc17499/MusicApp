import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {
  loginAction,
  setUserInfoAction,
  registrationAction,
  forgetPassAction,
  fetchAsyncAction,
  setDataAction,
} from '../action';
import {
  loginService,
  registrationService,
  forgetPassService,
  fetchAsyncService,
} from '../services';

function* loginWatch() {
  yield takeLatest(loginAction, function* ({payload}) {
    // console.log('bước 2: saga quan sát action');
    try {
      const {body} = payload;
      const result = yield call(loginService, body);
      //console.log(result) // sau khi quan sát action sẽ sang service gọi API
      if (result) {
        // yield put(setUserInfoAction(result.data));// sau khi trả vể response thành công, lưu data cần vào action
        if (payload?.callback) {
          // console.log('bước 5, nhận response từ service rồi gọi vào callback');
          payload.callback('', result);
          // this.props.navigation.navigate('MyTabs');
        }
      }
    } catch (error) {
      throw error;
    } finally {
    }
  });
}
function* registrationWatch() {
  yield takeLatest(registrationAction, function* ({payload}) {
    // console.log('bước 2: saga quan sát action');
    try {
      const {body} = payload;
      const result = yield call(registrationService, body);
      //console.log(result) // sau khi quan sát action sẽ sang service gọi API
      if (result) {
        // yield put(setUserInfoAction(result.data));// sau khi trả vể response thành công, lưu data cần vào action
        if (payload?.callback) {
          // console.log('bước 5, nhận response từ service rồi gọi vào callback');
          payload.callback('', result);
          // this.props.navigation.navigate('MyTabs');
        }
      }
    } catch (error) {
      throw error;
    } finally {
    }
  });
}
function* forgetPassWatch() {
  yield takeLatest(forgetPassAction, function* ({payload}) {
    // console.log('bước 2: saga quan sát action');
    try {
      const {body} = payload;
      const result = yield call(forgetPassService, body);
      //console.log(result) // sau khi quan sát action sẽ sang service gọi API
      if (result) {
        // yield put(setUserInfoAction(result.data));// sau khi trả vể response thành công, lưu data cần vào action
        if (payload?.callback) {
          // console.log('bước 5, nhận response từ service rồi gọi vào callback');
          payload.callback('', result);
          // this.props.navigation.navigate('MyTabs');
        }
      }
    } catch (error) {
      throw error;
    } finally {
    }
  });
}
export default function* rootSaga() {
  yield all([loginWatch, registrationWatch, forgetPassWatch].map(fork));
}
function* fetchAsyncWatch() {
  yield takeLatest(fetchAsyncAction, function* ({payload}) {
    try {
      const {endpoint} = payload;
      const result = yield call(fetchAsyncService, endpoint);
      if (result) {
        yield put(setDataAction(result));
        if (payload?.callback) {
          payload.callback('', result);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      // else if (payload?.callback) payload.callback("Server Error", {});
    }
  });
}
