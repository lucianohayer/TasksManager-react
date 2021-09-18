const express = require('express');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const app = express();

// DB setup
mongoose
	.connect('mongodb://localhost:27017/tasksmanager')
	.catch(error => console.error(error));

// APP setup
const env = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(cors());

// ROUTING
const indexRouter = require('./routes/index');
const tasksRouter = require('./routes/task');

app.use('/', indexRouter);
app.use('/task', tasksRouter);

// error handling middleware should be loaded after the loading the routes
if ('development' == env) {
	app.use(errorHandler());
}

// SERVER setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, function () {
	console.log('Express server listening on port ' + port);
});
