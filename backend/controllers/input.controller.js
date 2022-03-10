const User = require('../models').Users

exports.regist = (req,res) => {
    User.create({name:req.body.name})
    .then(User=>{
        console.log(User)
        res.send("名前登録")
    })
}

exports.find = (req,res)=>{
    console.log("get")
    User.findAll()
    .then(users =>{
        res.send(users)
    })
}