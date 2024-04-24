let express = require("express")
let routerUsers = express.Router();
let users = require("../data/users")

routerUsers.get("/users/:id", (req,res) => {
    let id = req.params.id
    let user = users.find( (t) => t.id == id);
    if (user == undefined){
        res.send("Error")
        return
    }
    res.send(user)
})

routerUsers.get("/users", (req,res) => {
    let email = req.query.email;
    if (email != undefined){
        let userwithEmail = users.filter( user => user.email == email);
        res.send(userwithEmail)
        return
    }
    res.send(users)
})

module.exports = routerUsers