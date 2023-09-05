import { createWebHistory, createRouter } from "vue-router";

import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import authServices from "@/services/auth"
import DefaultLayout from "@/layouts/DefaultLayout.vue"

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/new/HomeView.vue')
      },
      {
        path: 'friends',
        name: 'friends',
        component: () => import('@/views/new/FriendsView.vue')
      },
      {
        path: 'requests',
        name: 'requests',
        component: () => import('@/views/new/RequestsView.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/new/ProfileView.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/new/SettingsView.vue')
      }
    ]
  }
]

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: () => import('@/views/HomeView.vue'),
//   },
//   {
//     path: '/home',
//     redirect: '/'
//   },
//   {
//     path: '/profile/:id',
//     name: 'user-profile',
//     component: () => import('@/views/ProfileView.vue')
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: () => import('@/views/ProfileView.vue')
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('@/views/LoginView.vue')
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: () => import('@/views/RegisterView.vue')
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   const publicPages = ['/login', '/register']
//   const authRequired = !publicPages.includes(to.path)
//   const auth = useAuthStore()
//   const user = useUserStore()

//   if (!auth.loggedIn) {
//     try {
//       const data = await authServices.init()
//       // console.log('data',data.data)
//       auth.setLoggedIn(true)
//       auth.setUserId(data.data._id)
//       user.setFirstName(data.data.firstName)
//       user.setLastName(data.data.lastName)
//       user.setEmail(data.data.email)
//       user.setProfileImg(data.data.profileImg)
//       user.setPosts(data.data.posts)
//       user.setFollowing(data.data.following)
//       console.log(user.$state)
//     } catch (err) {
//       console.log(err)
//       if (authRequired) {
//         next('/login')
//       } else {
//         next();
//       }
//     }
//   }

//   if (to.name === 'login' || to.name === 'register' && auth.loggedIn) {
//     next('/')
//   } else {
//     next()
//   }
// })

export default router;
