const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	title: { type: String, required: true },
	description: String,
});

const ModelClass = mongoose.model('task', taskSchema);

module.exports = ModelClass;
