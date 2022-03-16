import Api from './index'

class InputService {
    regist(data){
        return Api().post("/input",data)
    }
    find(){
        return Api().get("/input")
    }
}

export default new InputService();