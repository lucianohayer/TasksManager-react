import tasksManager from '../apis/tasksManager';

import { FETCH_TASKS } from './types';

export const fetchTasks = () => async dispatch => {
	// TODO: Add error handler
	const response = await tasksManager.get('/task');
	dispatch({
		type: FETCH_TASKS,
		payload: response.data,
	});
};
