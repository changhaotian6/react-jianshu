import { put, takeEvery } from 'redux-saga/effects';
import { constants, actionCreators } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

function* HomeList(action) {
	console.log(action)
	const data = yield axios.get('/api/HomeList.json');
	console.log(data)
	yield put(actionCreators.setHomeList(fromJS(data.data.data)));
}
function* saga() {
	yield takeEvery(constants.HOME_LIST, HomeList);
}

export default saga;