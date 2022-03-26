<template>
    <div>
        <h1>ログイン</h1>
        <div class="flex login-input">
            <input type="text" v-model="email">
            <input type="text" v-model="password">
            <button type="submit" v-on:click="login()">送信</button>
        </div>
    </div>
</template>

<script>
import LoginService from "../api/login"
export default {
    data(){
        return{
        }
    },
    methods:{
        login(){
            const postData={email:this.email,pass:this.password}
            LoginService.login(postData)
            .then((response)=>{
                localStorage.setItem("user",JSON.stringify(response.data))
                this.$router.push("/input")
            })
            .catch((error)=>{
                alert(error)
            })
        }
    }
}
</script>

<style scoped>
.flex{
    display:flex;
}
.login-input{
    flex-direction: column;
    justify-content: center;
    align-items:center;
}
.login-input input{
    width:540px;
    border-radius:20px;
    font-size:18px;
    padding:3px 20px;
    margin-bottom:10px;
}
.login-input button{
    width:15%;
    border-radius:20px;
    padding:3px 5px;
    font-size:18px;
    border:none;
    background-color:blueviolet;
    color:#fff;
}
</style>