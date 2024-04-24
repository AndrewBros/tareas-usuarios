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

// Envío de datos directo
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
// Envío de datos como query
app.get("/users", (req,res) => {
    let email = req.query.email;
    if (email != undefined){
        let userwithEmail = users.filter( user => user.email == email);
        res.send(userwithEmail)
        return
    }
    res.send(users)
})

app.get("/tasks", (req,res) => {
    let text = req.query.text;
    if (text != undefined){
        let taskwithText = tasks.filter( task => task.text.indexOf(text) != -1 );
        res.send(taskwithText)
        return
    }
    res.send(tasks)
})

// Activación del servidor
app.listen(8081, () => {
    console.log("Servidor activo en 8081");
})