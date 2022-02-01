const Task = require('../models/task');

exports.task_list = (req, res, next) => {
	Task.find({}, (err, tasks) => {
		if (err) return next(err);

		res.json(tasks);
	});
};

exports.task_detail = (req, res, next) => {
	const { id } = req.params;

	Task.findOne({ _id: id }, (err, task) => {
		if (err) return next(err);

		res.json(task);
	});
};

exports.task_create = (req, res, next) => {
	const { body } = req;
	const taskInstance = new Task(body);

	taskInstance.save((err, task) => {
		if (err) return next(err);
		res.json(task);
	});
};

exports.task_delete = (req, res, next) => {
	const { id } = req.params;

	Task.deleteOne({ _id: id }, err => {
		if (err) return next(err);

		res.json({ message: 'Task deleted succesfully' });
	});
};

exports.task_update = (req, res, next) => {
	const { id } = req.params;
	const { body } = req;

	Task.updateOne({ _id: id }, body, undefined, err => {
		if (err) return next(err);

		return Task.findOne({ _id: id }, (err, task) => {
			if (err) return next(err);
			res.json(task);
		});
	});
};
