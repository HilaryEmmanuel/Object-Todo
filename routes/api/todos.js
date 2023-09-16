const express = require('express');
const router = express.Router();
const handler = require('../../controller/handler')

router.get('/', handler.main);

router.post('/v1/api/todos/add', handler.addTodo); 

router.get('/v1/api/todos/getall', handler.getAllTodo);

router.put('/v1/api/todos/update/:id', handler.updateTodo);

router.get('/v1/api/todos/todo/:id', handler.getTodo);

router.delete('/v1/api/todos/delete/:id', handler.deleteTodo);



module.exports = router;