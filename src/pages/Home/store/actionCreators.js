import * as constants from './constants';

export const getHomeList = () => ({
	type: constants.HOME_LIST	
});

export const setHomeList = (list) => ({
	type: constants.SET_HOME_LIST,
	list	
});