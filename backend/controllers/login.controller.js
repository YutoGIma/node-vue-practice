const User = require('../models').Users

exports.userLogin = (req,res)=>{
    console.log(req.body)
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(User=>{
        console.log(User)
        if(User==null){
            res.send("ユーザーが見つかりません。")
        }else if(User.password == req.body.pass){
            User.password =null
            res.send(User)
        }else{
            res.send("ログイン失敗")
        }
    })
}