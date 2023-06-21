import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL || '/'),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Auth/RegisterView.vue"),
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: () => import("../views/Auth/ForgotPassword.vue"),
    },
    {
      path: "/password-reset/:token",
      name: "ResetPassword",
      component: () => import("../views/Auth/ResetPassword.vue"),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/user/ProfileView.vue')
    },
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/intro',
      component: () => import('../views/IntroView.vue')
    },
    {
      path: '/blog',
      component: () => import('../views/Blog/BlogView.vue')
    },
    {
      path: '/blog/post',
      component: () => import('../views/Blog/BlogPostView.vue')
    },
    {
      path: '/uses',
      component: () => import('../views/UsesView.vue')
    },
    {
      path: '/contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
