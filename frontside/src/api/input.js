import Api from './index'

class InputService {
    regist(data){
        return Api().post("/input/regist",data)
    }
}

export default new InputService();