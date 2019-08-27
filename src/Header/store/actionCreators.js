import * as constants from './constants';

export const onFocus = (data) => ({
	type: constants.ON_FOCUS,
	data
});

export const onBlur = () => ({
	type: constants.ON_BLUR
});

export const getSearchList = (list, total) => ({
	type: constants.GET_SEARCH_LIST,
	list,
	total
});

export const changePage = (page, total) => ({
	type: constants.CHANGEPAGE,
	page,
	total
});
export const mouseEnter = () => ({
	type: constants.ONMOUSEENTER
});
export const mouseLeave= () => ({
	type: constants.ONMOUSELEAVE
});