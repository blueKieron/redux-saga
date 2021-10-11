import {
  takeEvery,
  takeLatest,
  throttle,
  select,
  call,
  take,
  put,
} from "redux-saga/effects";
import axios from "axios";

export function* defSaga() {
  yield takeEvery("takeEvery", function* () {
    // 获取state数据
    const user = yield select((state) => state.user);
    const res = yield call(
      axios.post,
      "https://www.fastmock.site/mock/3e6167c55f1f9f119e79d32bf972447d/reduxSaga/userinfo",
      {
        ...user,
      }
    );
    console.log('takeEvery',res);
    yield put({
      type: "login",
      ...res.data
    })
  });
  // yield takeLatest("takeLatest", function* () {
  //   console.log("takeLatest");
  //   const user = yield select((state) => state.user);
  //   const res = yield call(
  //     axios.post,
  //     "https://www.fastmock.site/mock/3e6167c55f1f9f119e79d32bf972447d/reduxSaga/userinfo",
  //     {
  //       ...user,
  //     }
  //   );
  //   console.log("takeLatest",res);
  // });
  // yield throttle(0, "throttle", function* () {
  //   console.log("throttle");
  //   const user = yield select((state) => state.user);
  //   // console.log('takeEvery')
  //   const res = yield call(
  //     axios.post,
  //     "https://www.fastmock.site/mock/3e6167c55f1f9f119e79d32bf972447d/reduxSaga/userinfo",
  //     {
  //       ...user,
  //     }
  //   );
  //   console.log("takeLatest",res);
  // });
  // while(true){
  //   yield take('take')
  //   console.log('take action')
  // }
}
