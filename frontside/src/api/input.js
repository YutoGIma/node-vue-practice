import Api from './index'

class InputService {
    regist(data){
        return Api().post("/input",data)
    }
    find(){
        return Api().get("/input")
    }
    change(data){
        return Api().put(`/input/${data.id}`,data)
    }
    delete(data){
        return Api().delete(`/input/${data}`)
    }
}

export default new InputService();