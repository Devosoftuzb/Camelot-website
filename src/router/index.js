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
      name: 'admin',
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
      path: '/Habarlar',
      name: 'Habarlar',
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
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem("token");

//   if (
//     (to.name == "admin" ||
//       to.name == "Ustozlar" ||
//       to.name == "Kurslar" ||
//       to.name == "Rasmlar" ||
//       to.name == "Afzaliklar" ||
//       to.name == "Habarlar") &&
//     to.name !== "Login" &&
//     !token
//   ) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

export default router
