import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import ProfilePage from "@/views/ProfilePage";

import WelcomePage from "@/views/WelcomePage";
import Home from "@/views/Home";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profilePage',
    name: 'ProfilePage',
    component: ProfilePage
  },

  {
    path: '/welcomePage',
    name: 'Welcome Page',
    component: WelcomePage
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
