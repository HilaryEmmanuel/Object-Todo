const dataStore = require('../model/db');

exports.addTodo = (req, res) => { /* Add a Todo */
    const newTodo = {
        id: req.body.id,
        fullname: req.body.fullname,
        colour: req.body.colour
    }

    if (!newTodo.id || !newTodo.fullname || !newTodo.colour) {
        res.status(200).json({
            error: "true",
            message: "add a todo" });
    } else {
        dataStore.Objectdb[req.body.id] = newTodo;
        res.status(201).json({
            sucess: "true",
            data: dataStore.Objectdb,
            message:"todo created"
        });
    }

};


exports.getTodo = (req, res) => { /*get a Todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(dataStore.Objectdb) == paramID) {
        res.status(200).json({
            sucess: "true",
            data: dataStore.Objectdb[req.params.id],
            message:"todo Retrieved"
        });
    }
    else {
        res.status(404).json({
            error:"true",
            message: "todo not found"
        });
    }
}



exports.updateTodo = (req, res) => { /* update todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(dataStore.Objectdb) == paramID) {
        const updateTodo = {
            id: req.body.id,
            fullname: req.body.fullname,
            colour: req.body.colour,

        }
        dataStore.Objectdb[req.body.id] = updateTodo;
        res.status(200).json({
            succes:"true",
            data: dataStore.Objectdb,
            message: "todo succesfully updated"
        });

    } else {
        res.status(404).json({ 
            error:"true",
            message: "todo not found"
        });
    }
}



exports.getAllTodo = (req, res) => { /*get all todos */
    if (Object.values(dataStore.Objectdb) != '') {
        res.status(200).json(dataStore.Objectdb);
    } else {
        res.status(200).json({
            error:"true",
            message: "no todo added" 
        });
    }
}



exports.deleteTodo = (req, res) => { /*delete todo */
    const paramID = parseInt(req.params.id);
    if (Object.keys(dataStore.Objectdb) == paramID) {
        delete dataStore.Objectdb[req.params.id];
        res.status(200).json({
            sucess: "true",
            message: "todo deleted"
         });
    } else {
        res.status(404).json({
            error:"true",
            message: "todo not found"
         });
    }


}

exports.main = (req, res)=>{
    res.json("ObjectTodo Api is running.....");
}