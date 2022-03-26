<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){ 
    this.checkLogin()
  },
  methods:{
    checkLogin(){
      console.log("loginCheck")
      let loginInfo = localStorage.getItem("user")
      console.log(loginInfo)
      if(loginInfo == null){
        this.$router.push("/")
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
