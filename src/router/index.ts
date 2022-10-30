import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MyDapp from '../views/MyDapp.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history:   createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mydapp',
      name: 'myDapp',
      component: MyDapp
    },
  ]
})

export default router
