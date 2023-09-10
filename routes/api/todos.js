const express = require('express');
const router = express.Router();

arraydb = {

}



router.post('/add', (req, res) => { /* Add a Todo */
    const newTodo = {
        id: req.body.id,
        fullname: req.body.fullname,
        colour: req.body.colour
    }

    if (!newTodo.id || !newTodo.fullname || !newTodo.colour) {
        res.status(204).json([]);
    } else {
        arraydb[req.body.id] = newTodo;
        res.status(201).json(arraydb);
    }


})

router.get('/', (req, res) => { /*get all todos */
    if (Object.values(arraydb) != '') {
        res.status(200).json(arraydb);
    } else {
        res.status(204).json([]);
    }
})


router.get('/todo/:id', (req, res) => { /*get a Todo */
const paramID = parseInt(req.params.id);
    if (Object.keys(arraydb) == paramID) {
        res.status(200).json(arraydb[req.params.id]);
    }
    else {
        res.status(404).json([]);
    }

})

router.put('/update/todo/:id', (req, res) => { /* update todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(arraydb) == paramID) {
        const updateTodo = {
            id: req.body.id,
            fullname: req.body.fullname,
            colour: req.body.colour,

        }
        arraydb[req.body.id] = updateTodo;
        res.status(200).json(arraydb);

    } else {
        res.status(404).json([]);
    }
})

router.delete('/delete/:id', (req, res) => { /*delete todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(arraydb) == paramID) {
        delete arraydb[req.params.id];
        res.status(200).json(["todo deleted"]);
    } else {
        res.status(404).json([]);
    }


})



module.exports = router;