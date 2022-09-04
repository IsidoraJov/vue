import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';
import ProfilePage from "@/views/ProfilePage";
import HomePage from "@/views/HomePage";
import WelcomePage from "@/views/WelcomePage";


Vue.use(VueRouter)

const routes = [
 
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
    name: 'Profile Page',
    component: ProfilePage
  },
  {
    path: '/HomePage',
    name: 'Home Page',
    component: HomePage
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
