import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskList from './Tasks/TaskList';
import TaskCreate from './Tasks/TaskCreate';
import TaskEdit from './Tasks/TaskEdit';
import TaskDelete from './Tasks/TaskDelete';
import TaskShow from './Tasks/TaskShow';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={TaskList} />
					<Route path="/task/new" exact component={TaskCreate} />
					<Route path="/task/edit/:id" exact component={TaskEdit} />
					<Route path="/task/delete/:id" exact component={TaskDelete} />
					<Route path="/task/:id" exact component={TaskShow} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
