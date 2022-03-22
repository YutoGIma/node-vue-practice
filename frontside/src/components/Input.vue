<template>
    <div id="inputUser">
        <h1>入力フォーム</h1>
        <input type="text" v-model="email">
        <button type="submit" v-on:click="inputRegist()">送信</button>
        <div v-for="list in info" :key="list.id">
            <p>{{list.email}}</p>
            <input type="text" v-model="list.email">
            <button type="submit" v-on:click="inputChange(list)">変更</button>
            <button type="submit" v-on:click="inputDelete(list)">削除</button>
        </div>
    </div>
</template>

<script>
import InputService from "../api/input"
export default ({
    data(){
        return{
            info:[],
            email:null,
        }
    },
    mounted(){
        InputService.find()
        .then((response)=>{
            console.log(response.data)
            this.info=response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    methods:{
        inputRegist(){
            const postRegist={email:this.email}
            InputService.regist(postRegist)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                alert(error)
            })
        },
        inputChange(list){
            InputService.change(list)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                alert(error)
            })
        },
        inputDelete(list){
            InputService.delete(list.id)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                alert(error)
            })
        }
    }
})
</script>
