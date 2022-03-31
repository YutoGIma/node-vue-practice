<template>
    <div>
        <h1>コンポジションAPI</h1>
        <div>{{firstMessage}}</div>
        <!-- <div>{{secondMessage}}</div> -->
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type:String,
            required:true
        }
    },
    setup(props) {
        const firstMessage = "実装テスト中"
        console.log("yes")
        console.log(props)
        return{
            firstMessage
        }
    },
}
</script>
