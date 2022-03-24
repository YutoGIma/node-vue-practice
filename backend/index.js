const input = require("./controllers/input.controller")
const login = require("./controllers/login.controller")
const express = require("express")
const bodyParser = require("body-parser")
//corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/test",function(req,res){
    console.log("test")
    res.send({
        message:"こんにちは"
    })
})

app.post("/input",input.regist)
app.get("/input",input.find)
app.put("/input/:id",input.change)
app.delete("/input/:id",input.delete)
app.post("/login",login.userLogin)

app.listen(process.env.PORT || 3000)