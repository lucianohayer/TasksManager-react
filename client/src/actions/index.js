import tasks from '../apis/tasksManager';

import {
	CREATE_TASK,
	EDIT_TASK,
	FETCH_TASKS,
	FETCH_TASK,
	DELETE_TASK,
} from './types';
import history from '../history';

export const fetchTasks = () => async dispatch => {
	// TODO: Add error handler
	const response = await tasks.get('/task');
	dispatch({
		type: FETCH_TASKS,
		payload: response.data,
	});
};

export const fetchTask = id => async dispatch => {
	const response = await tasks.get(`/task/${id}`);
	dispatch({
		type: FETCH_TASK,
		payload: response.data,
	});
};

export const createTask = formValues => async dispatch => {
	const response = await tasks.post('/task', { ...formValues });
	dispatch({
		type: CREATE_TASK,
		payload: response.data,
	});
	history.push('/');
};

export const editTask = (id, formValues) => async dispatch => {
	const response = await tasks.patch(`/task/${id}`, formValues);
	dispatch({
		type: EDIT_TASK,
		payload: response.data,
	});
	history.push('/');
};

export const deleteTask = id => async dispatch => {
	await tasks.delete(`/task/${id}`);
	dispatch({
		type: DELETE_TASK,
		payload: id,
	});
	history.push('/');
};
