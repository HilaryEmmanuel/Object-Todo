const express = require('express');
const router = express.Router();
const handler = require('../../controller/handler')

router.post('/add', handler.addTodo); 

router.get('/', handler.getAllTodo);

router.put('/update/:id', handler.updateTodo);

router.get('/todo/:id', handler.getTodo);

router.delete('/delete/:id', handler.deleteTodo);




module.exports = router;