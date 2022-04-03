<template>
    <div id="ManyInput">
        <h1>多段入力</h1>
        <p>{{message}}</p>
        <form v-for="word in words" :key="word.id">
            <p>{{word.id}}</p>
            <input type="text" v-model="word.name">
            <p v-if="showNameError(word.id)">{{nameError}}</p>
            <input type="text" v-model="word.email">
            <p v-if="showEmailError(word.id)">{{emailError}}</p>
        </form>
        <button type="button" @click="addInput()">像か</button>
        <button type="button" @click="manyPush(words)">提出</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            words:[{
                id:0,
                name:null,
            }],
            num:0,
            message:"manyInput",
            nameError:"",
            emailError:"",
        }
    },
    computed: {
        showNameError(){
            return function (id){
                if(this.words[id].name == null){
                    return false
                }
                let inputName = this.words[id].name
                if(inputName == ""){
                    this.nameError = "名前を正しく入力してください"
                    return true
                }else if(inputName.length < 4){
                    this.nameError = "4文字以上入力して下さい"
                    return true
                }else if(inputName.length > 20){
                    this.nameError = "20文字以下で入力して下さい"
                    return true
                }else{
                    return false
                }
            }
        },
        showEmailError(){
            return function(id){
                if(this.words[id].email == null){
                    return false
                }
                let inputEmail = this.words[id].email
                let emailChecker = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+\.[A-Za-z0-9]+$/
                if(!emailChecker.test(inputEmail)){
                    this.emailError = "メールアドレスを正しく入力してください"
                    return true
                }else if(inputEmail.length < 4){
                    this.emailError = "4文字以上入力して下さい"
                    return true
                }else{
                    return false
                }
            }
        }
    },
    mounted(){
        console.log("manyInput")
        this.message="ManyInput"
        console.log(this.message)
    },
    methods:{
        addInput(){
            this.num = this.num + 1
            let addContent={
                id:this.num,
                name:'',
                email:''
            }
            this.words.push(addContent)
        },
        manyPush(data){
            console.log(data)
        }
    }
}
</script>

<style scoped>
input{
    display:block;
    margin:10px auto 0px;
}
p{
    margin:0;
}
button{
    margin:15px 5px;
    font-size:18px;
    border:none;
    padding:5px 10px;
    background-color:rgb(63, 63, 63);
    color:#fff;
    border-radius:10px;
}
form{
    border: #000 3px solid;
    margin:20px;
    padding:20px;
}
</style>