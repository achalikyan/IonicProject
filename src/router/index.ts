import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Eula from '../views/Eula.vue'
import TaskList from '../views/TaskList.vue'
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/eula',
    name: 'Eula',
    component: Eula
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'task_list',
        component: () => import('@/views/TaskList.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'configuration',
        component: () => import('@/views/configuration.vue')
      },
      {
        path: 'chat',
        component: () => import('@/views/chat.vue')
      },
      {
        path: 'create',
        component: () => import('@/views/create.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
