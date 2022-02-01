import _ from 'lodash';
import {
	CREATE_TASK,
	EDIT_TASK,
	FETCH_TASKS,
	FETCH_TASK,
	DELETE_TASK,
} from '../actions/types';

const taskReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_TASKS:
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		case FETCH_TASK:
			return { ...state, [action.payload._id]: action.payload };
		case CREATE_TASK:
			return { ...state, [action.payload._id]: action.payload };
		case EDIT_TASK:
			return { ...state, [action.payload._id]: action.payload };
		case DELETE_TASK:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

export default taskReducer;
