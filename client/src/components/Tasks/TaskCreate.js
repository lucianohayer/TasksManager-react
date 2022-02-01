import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions';
import TaskForm from './TaskForm';

class TaskCreate extends Component {
	onSubmit = formValues => {
		this.props.createTask(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a task</h3>
				<TaskForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createTask })(TaskCreate);
