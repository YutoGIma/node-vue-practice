<template>
    <div id="ManyInput">
        <h1>多段入力</h1>
        <p>{{message}}</p>
        <form v-for="word in words" :key="word.id">
            <p>{{word.id}}</p>
            <input type="text" v-model="word.name">
            <p v-if="showNameError(word.id)">{{nameError}}</p>
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
        }
    },
    computed: {
        showNameError(){
            return function (id){
                if(this.words[0].name == null){
                    return false
                }
                let inputName = this.words[id].name
                if(inputName == ""){
                    this.nameError = "名前を正しく入力してください"
                    return true
                }else if(inputName.length < 4){
                    this.nameError = "4文字以上入力して下さい"
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
                name:''
            }
            this.words.push(addContent)
        },
        manyPush(data){
            console.log(data)
        }
    }
}
</script>