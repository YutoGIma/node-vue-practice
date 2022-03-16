<template>
    <div>
        <h1>利用者登録</h1>
        <input type="text" v-model="email">
        <input type="text" v-model="password">
        <button type="submit" v-on:click="userRegist()">送信</button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        userRegist(){
            const postRegist={email:this.email,pass:this.password}
            InputService.regist(postRegist)
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