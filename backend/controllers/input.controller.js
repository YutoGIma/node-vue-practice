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
    User.update({
        name:req.body.name
    },
    {where:{
        id:req.params.id
    }})
    res.send("変更完了")
}

exports.delete = (req,res)=>{
    User.destroy({
        where:{
            id:req.params.id
        }
    })
    res.send("削除完了")
}