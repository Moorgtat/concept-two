import Vue from 'vue'
import Router from 'vue-router'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ViewSong from '@/components/ViewSong'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/create',
      name: 'CreateSong',
      component: CreateSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'EditSong',
      component: EditSong
    },
    {
      path: '/songs/:songId',
      name: 'ViewSong',
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
      path: '*',
      redirect: 'Songs'
    }
  ]
})
