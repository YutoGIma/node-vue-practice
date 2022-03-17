const User = require('../models').Users

exports.regist = (req,res) => {
    User.create({name:req.body.name})
    .then(User=>{
        console.log(User)
        res.send("名前登録")
    })
}

exports.find = (req,res)=>{
    User.findAll()
    .then(users =>{
        res.send(users)
    })
}

exports.change = (req,res)=>{
    console.log(req.params.id)
    User.update({
        name:req.body.name
    },
    {where:{
        id:req.params.id
    }})
}