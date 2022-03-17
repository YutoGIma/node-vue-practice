const input = require("./controllers/input.controller")
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

app.post("/test",function(req,res){
    console.log(req.body)
    console.log("post::"+req.body.name)
    res.send({
        message:req.body.name
    })
})

app.post("/input",input.regist)
app.get("/input",input.find)
app.put("/input/:id",input.change)

app.listen(process.env.PORT || 3000)