let express = require("express")
let routerTasks = express.Router();
let tasks = require("../data/tasks")

routerTasks.get("/:id", (req,res) => {
    let id = req.params.id
    let task = tasks.find( (t) => t.id == id);
    if (task == undefined){
        res.send("Error")
        return
    }
    res.send(task)
})

routerTasks.get("/", (req,res) => {
    let text = req.query.text;
    if (text != undefined){
        let taskwithText = tasks.filter( task => task.text.indexOf(text) != -1 );
        res.send(taskwithText)
        return
    }
    res.send(tasks)
})

module.exports = routerTasks