<template>
    <div id="inputUser">
        <h1>入力フォーム</h1>
        <input type="text" v-model="name">
        <button type="submit" v-on:click="inputRegist()">送信</button>
    </div>
</template>

<script>
import InputService from "../api/input"
export default ({
    name:'inputUser',
    methods:{
        inputRegist(){
            const postRegist={name:this.name}
            InputService.regist(postRegist)
            .then(function(response){
                console.log(response)
                console.log(response.data)
            })
            .then(function(error){
                alert(error.response.data)
            })
        }
    }
})
</script>
