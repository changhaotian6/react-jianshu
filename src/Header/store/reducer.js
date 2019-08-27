import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	list: [],
	page: 1,
	total: 1,
	mouseIn: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.ON_FOCUS:
			return state.set('focused', true);
		case constants.ON_BLUR:
			return state.set('focused', false);
		case constants.GET_SEARCH_LIST:
			return state.set('list', action.list).set('total', action.total);
		case constants.CHANGEPAGE: 
			if (action.page < action.total) {
				return state.set('page', action.page + 1);
			} else {
				return state.set('page', 1);
			}
		case constants.ONMOUSEENTER:
			return state.set('mouseIn', true);
		case constants.ONMOUSELEAVE:
			return state.set('mouseIn', false);
		default:
			return state;
	}
	
}
