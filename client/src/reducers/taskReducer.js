import _ from 'lodash';
import { FETCH_TASKS } from '../actions/types';

const taskReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_TASKS:
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		default:
			return state;
	}
};

export default taskReducer;
