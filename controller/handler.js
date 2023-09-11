const dataStore = require('../model/db');

exports.addTodo = (req, res) => { /* Add a Todo */
    const newTodo = {
        id: req.body.id,
        fullname: req.body.fullname,
        colour: req.body.colour
    }

    if (!newTodo.id || !newTodo.fullname || !newTodo.colour) {
        res.status(200).json({ todo: "add a todo" });
    } else {
        dataStore.arraydb[req.body.id] = newTodo;
        res.status(201).json(dataStore.arraydb);
    }

};


exports.getTodo = (req, res) => { /*get a Todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(dataStore.arraydb) == paramID) {
        res.status(200).json(dataStore.arraydb[req.params.id]);
    }
    else {
        res.status(404).json({ todo: "todo not found" });
    }
}



exports.updateTodo = (req, res) => { /* update todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(dataStore.arraydb) == paramID) {
        const updateTodo = {
            id: req.body.id,
            fullname: req.body.fullname,
            colour: req.body.colour,

        }
        dataStore.arraydb[req.body.id] = updateTodo;
        res.status(200).json(dataStore.arraydb);

    } else {
        res.status(404).json({ todo: "todo not found" });
    }
}



exports.getAllTodo = (req, res) => { /*get all todos */
    if (Object.values(dataStore.arraydb) != '') {
        res.status(200).json(dataStore.arraydb);
    } else {
        res.status(200).json({ todo: "no todo added" });
    }
}



exports.deleteTodo = (req, res) => { /*delete todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(dataStore.arraydb) == paramID) {
        delete dataStore.arraydb[req.params.id];
        res.status(200).json({ todo: "todo deleted" });
    } else {
        res.status(404).json({ todo: "todo not found" });
    }


}