<template>
    <div>
        <h1>ログイン</h1>
        <input type="text" v-model="email">
        <input type="text" v-model="password">
        <button type="submit" v-on:click="login()">送信</button>
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
                console.log(response)
            })
            .catch((error)=>{
                alert(error)
            })
        }
    }
}
</script>