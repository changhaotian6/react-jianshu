import { all } from 'redux-saga/effects';
import HeaderSaga from '../Header/store/saga';
import HomeSaga from '../pages/Home/store/saga';
export default function* rootSaga() {
  yield all([
    HeaderSaga(),
    HomeSaga()
  ])
}