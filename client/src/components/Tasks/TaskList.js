import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../../actions';

class TaskList extends Component {
	componentDidMount() {
		this.props.fetchTasks();
	}

	renderActions(task) {
		return (
			<div className="right floated content">
				<Link to={`/task/edit/${task._id}`} className="ui button primary">
					Edit
				</Link>
				<Link to={`/task/delete/${task._id}`} className="ui button negative">
					Delete
				</Link>
			</div>
		);
	}

	renderList() {
		return this.props.tasks.map(task => {
			return (
				<div className="item" key={task._id}>
					{this.renderActions(task)}
					<i className="large middle aligned icon tasks" />
					<div className="content">
						<Link to={`/task/${task._id}`} className="header">
							{task.title}
						</Link>
						<div className="description">{task.description}</div>
					</div>
				</div>
			);
		});
	}

	renderCreate() {
		return (
			<div style={{ textAlign: 'right' }}>
				<Link to="/task/new" className="ui button primary">
					Create task
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div>
				<h2>Tasks</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreate()}
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
