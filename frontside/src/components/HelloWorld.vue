<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-link :to="{name:'Login'}"><button>ログインする</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'node.jsのExpressとVue.jsを利用したアプリケーション'
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a{
  text-decoration: none;
}
button{
  width:240px;
  padding:3px 10px;
  display: block;
  margin:0 auto;
  border-radius:30px;
  color:#fff;
  background-color:blueviolet;
  border:none;
  font-size:18px;
}
</style>
