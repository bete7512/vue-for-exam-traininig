import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/anonymous/views/Home.vue'
import About from '@/components/anonymous/views/AboutView.vue'
import logInVue from '@/components/anonymous/logIn.vue'
import ProjectsVue from '@/components/loggedin/dashboard/Projects.vue'
import dashBoard from '@/components/loggedin/dashboard/dashBoard.vue'
import signUpVue from '@/components/anonymous/signUp.vue'
import homedashboard from '@/components/loggedin/dashboard/homedashboard.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard/:id',
    name: 'dashboard',
    component: dashBoard,
    children:[
      {
        path:'',
        name:'projects',
        component:ProjectsVue
      },
      {
        path:'',
        name:'homedashboard',
        component:homedashboard
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:'/login',
    name:'login',
    component:logInVue
  },

  {
    path:'/signup',
    name:'signup',
    component:signUpVue
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
