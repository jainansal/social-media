import { createWebHistory, createRouter } from "vue-router";
import { useToast } from "vue-toastification";

import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import authServices from "@/services/auth"

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
    path: '/profile/:id',
    name: 'user-profile',
    component: () => import('@/views/ProfileView.vue')
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

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()
  const user = useUserStore()

  if (!auth.loggedIn) {
    try {
      const data = await authServices.init()
      auth.setLoggedIn(true)
      auth.setUserId(data.data._id)
      user.setFirstName(data.data.firstName)
      user.setLastName(data.data.lastName)
      user.setEmail(data.data.email)
      user.setProfileImg(data.data.profileImg)
      user.setPosts(data.data.posts)
      console.log(user.$state)
    } catch (err) {
      console.log(err)
      if (authRequired) {
        next('/login')
      } else {
        next();
      }
    }
  }

  if (to.name === 'login' || to.name === 'register' && auth.loggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router;
