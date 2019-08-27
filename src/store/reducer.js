import { combineReducers } from 'redux-immutable';
// import { combineReducers } from 'redux';
import { reducer as HeaderReducer } from '../Header/store';
import { reducer as HomeReducer} from '../pages/Home/store';
export default combineReducers({
	HeaderReducer,
	HomeReducer
});

