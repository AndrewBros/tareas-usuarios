// Mostrar información de parámetros en objetos
let express = require("express")
let app = express();
let tasks = require("./data/tasks")
let users = require("./data/users")

// Envío de datos
let routerTasks = require("./routers/routerTasks")
let routerUsers = require("./routers/routerUsers")
app.use("/tasks", routerTasks)
app.use("/users", routerUsers)


// Activación del servidor
app.listen(8081, () => {
    console.log("Servidor activo en 8081");
})