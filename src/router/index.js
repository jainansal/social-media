import { createWebHistory, createRouter } from "vue-router";
import { useToast } from "vue-toastification";

import { useAuthStore } from "../stores/auth";

const toast = useToast()

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.loggedIn) {
    toast.warning('You need to login first')
    return '/login'
  }
})

export default router;
