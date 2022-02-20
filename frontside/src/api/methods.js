import Api from './index'

export default {
    testPosting(){
        const item = {text:"success"}
        return Api().post("/test",item)
    }
}