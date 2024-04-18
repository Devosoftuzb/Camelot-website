import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component:()=>import('@/admin/Home/Admin.vue')
    },
    {
      path: '/Ustozlar',
      name: 'Ustozlar',
      component:()=>import('@/admin/Ustozlar/Ustozlar.vue')
    },
    {
      path: '/Kurslar',
      name: 'Kurslar',
      component:()=>import('@/admin/Kurslar/Kurslar.vue')
    },
    {
      path: '/Rasmlar',
      name: 'Rasmlar',
      component:()=>import('@/admin/Rasmlar/Rasmlar.vue')
    },
    {
      path: '/Rasmlar',
      name: 'Rasmlar',
      component:()=>import('@/admin/Rasmlar/Rasmlar.vue')
    },
    {
      path: '/Afzaliklar',
      name: 'Afzaliklar',
      component:()=>import('@/admin/Afzaliklar/Afzaliklar.vue')
    },
    {
      path: '/Bog`lanish',
      name: 'Bog`lanish',
      component:()=>import('@/admin/Bog`lanish/Bog`lanish.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component:()=>import('@/admin/Login/Login.vue')
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error.vue')
    },
  ]
})

export default router
