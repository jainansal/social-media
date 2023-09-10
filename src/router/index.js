import { createWebHistory, createRouter } from "vue-router";
import { useToast } from "vue-toastification";
const toast = useToast();

import { useAuthStore } from "../stores/auth";
import authServices from "@/services/auth";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'friends',
        name: 'friends',
        component: () => import('@/views/FriendsView.vue')
      },
      {
        path: 'requests',
        name: 'requests',
        component: () => import('@/views/RequestsView.vue')
      },
      {
        path: 'profile/:id',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/SettingsView.vue')
      }
    ]
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const publicPages = ['login', 'register']
  const authRequired = !publicPages.includes(to.name)
  const authStore = useAuthStore();

  if (!authStore.init) {
    authStore.setInit();
    try {
      const response = await authServices.init();
      authStore.setID(response.id);
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message || "Some error occured");
      if (authRequired) {
        next('/login')
      } else {
        next();
      }
    }
  }

  if ((to.name === 'login' || to.name === 'register') && authStore.id) {
    next('/')
  } else {
    next()
  }
})

export default router;
