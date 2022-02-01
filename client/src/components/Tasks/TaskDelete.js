import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTask, deleteTask } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class TaskDelete extends Component {
	componentDidMount() {
		this.props.fetchTask(this.props.match.params.id);
	}

	renderActions() {
		const { id } = this.props.match.params;
		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteTask(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.task) {
			return 'Are you sure you want to delete this task?';
		}
		return `Are you sure you want to delete the task with title: ${this.props.task.title}`;
	}

	render() {
		return (
			<Modal
				title="Delete modal"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { task: state.tasks[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTask, deleteTask })(TaskDelete);
