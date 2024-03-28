// Mostrar información de parámetros en objetos
let express = require("express")
let app = express();

let tasks = [
    {id: 1, text: "Hacer la compra"},
    {id: 2, text: "Pagar luz"},
    {id: 3, text: "Revisar facturas"}
]
let users = [
    {id: 1, email:"user1@", password:"user1"},
    {id: 2, email:"user2@", password:"user2"}
]

app.get("/tasks/:id", (req,res) => {
    let id = req.params.id
    let task = tasks.find( (t) => t.id == id);
    if (task == undefined){
        res.send("Error")
        return
    }
    res.send(task)
})

app.get("/users/:id", (req,res) => {
    let id = req.params.id
    let user = users.find( (t) => t.id == id);
    if (user == undefined){
        res.send("Error")
        return
    }
    res.send(user)
})

app.listen(8081, () => {
    console.log("Servidor activo en 8081");
})