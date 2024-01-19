import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: HomeView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/index.vue')
    },
    {
      path: '/zuce',
      name: 'zuce',
      component: () => import('../views/login/zuce.vue')
    }
    ,
    {
      path: '/categraty',
      name: 'categraty',
      component: () => import('../views/admin/categraty.vue')
    }
    ,
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/admin/my.vue')
    }
    ,
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/admin/shop.vue')
    }

  ]
})

export default router
