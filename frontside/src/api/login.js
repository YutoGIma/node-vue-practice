import Api from './index'

class LoginService {
    login(data){
        return Api().post("/login",data)
    }
}

export default new LoginService();