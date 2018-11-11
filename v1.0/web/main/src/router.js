import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Create from './views/Create.vue'
import Usermain from './views/Usermain.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/usermain',
      name: 'usermain',
      component : Usermain
    },
    {
      path: '/admin',
      name: 'admin',
      props: true,
      component : Admin
    },
    //{
    //  path: '/about',
    //  name: 'about',
    //  // route level code-splitting
    //  // this generates a separate chunk (about.[hash].js) for this route
    //  // which is lazy-loaded when the route is visited.
    //  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}
  ]
})
