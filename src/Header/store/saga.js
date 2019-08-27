import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fromJS } from 'immutable';
import { constants, actionCreators } from './index';
function* headerFocus(action) {
	if (action.data.size !== 0) {
		const data = action.data;
		const newAction = actionCreators.getSearchList(data, Math.ceil(data.length / 10));
		yield put(newAction);
	} else {
		const { data: { data } } = yield axios.get('./api/headerList.json');
		const newAction = actionCreators.getSearchList(fromJS(data), Math.ceil(data.length / 10));
		yield put(newAction);
	}
	
}	

function* HeaderSaga() {
	yield takeEvery(constants.ON_FOCUS, headerFocus);
}

export default HeaderSaga;