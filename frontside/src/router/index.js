import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Input from '../components/Input'
import User from '../components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/input",
      name:"Input",
      component:Input
    },
    {
      path: "/user",
      name:"User",
      component:User
    }
  ]
})
