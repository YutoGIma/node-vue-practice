<template>
    <div id="ManyInput">
        {{message}}
        <!-- <form v-for="word in words" :key="word.id">
            <p>{{word.id}}</p>
            <input type="text" v-model="word.name">
            <button type="button" @click="manyPush(words)">提出</button>
            <button type="button" @click="addInput()">像か</button> -->
        <!-- </form> -->
    </div>
</template>

<script>
export default {
    name:"ManyInput",
    deta(){
        return {
            // words:[{
            //     id:0,
            //     name:null,
            // }],
            // num:0,
            message:"複数同時入力のテストです。"
        }
    },
    mounted(){
        console.log("manyInput")
    },
    // methods:{
    //     addInput(){
    //         this.num = this.num + 1
    //         let addContent={
    //             id:this.num,
    //             name:''
    //         }
    //         this.wrods.push(addContent)
    //     },
    //     manyPush(data){
    //         console.log(data)
    //     }
    // }
}
</script>