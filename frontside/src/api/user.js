import Api from './index'

class UserService {
    regist(data){
        return Api().post("/user",data)
    }
    find(){
        return Api().get("/user")
    }
}

export default new UserService();