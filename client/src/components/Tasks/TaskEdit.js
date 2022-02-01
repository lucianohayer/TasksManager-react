import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, editTask } from '../../actions';
import TaskForm from './TaskForm';

class TaskEdit extends Component {
	componentDidMount() {
		this.props.fetchTask(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editTask(this.props.match.params.id, formValues);
	};

	render() {
		return (
			<div>
				<h3>Edit a task</h3>
				<TaskForm
					initialValues={_.pick(this.props.task, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		task: state.tasks[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchTask, editTask })(TaskEdit);
