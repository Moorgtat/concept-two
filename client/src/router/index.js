import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'CreateSong',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      redirect: 'Home'
    }
  ]
})
