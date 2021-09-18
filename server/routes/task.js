var express = require('express');
var router = express.Router();

const task_controller = require('../controllers/taskController');

router.post('/', task_controller.task_create);

router.delete('/:id', task_controller.task_delete);

router.patch('/:id', task_controller.task_update);

router.get('/:id', task_controller.task_detail);

router.get('/', task_controller.task_list);

module.exports = router;
