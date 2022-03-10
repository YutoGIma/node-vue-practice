import Api from './index'

class InputService {
    regist(data){
        return Api().post("/input/regist",data)
    }
    find(){
        return Api().get("/input/find")
    }
}

export default new InputService();