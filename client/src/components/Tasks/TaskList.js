import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../../actions';

class TaskList extends Component {
	componentDidMount() {
		this.props.fetchTasks();
	}

	renderList() {
		return this.props.tasks.map(task => {
			return (
				<div className="item" key={task._id}>
					<i className="large middle aligned icon tasks" />
					<div className="content">{task.title}</div>
					<div className="description">{task.description}</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Tasks</h2>
				<div className="ui celled list">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tasks: Object.values(state.tasks),
	};
};

export default connect(mapStateToProps, { fetchTasks })(TaskList);
