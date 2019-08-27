import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	list: []
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SET_HOME_LIST:
			// state.merge({'list', action.list, 'list', action.list})
			return state.set('list', action.list);
		default: 
			return state;
	}
};