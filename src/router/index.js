import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Test = () => import(/* webpackChunkName: "test" */ '../views/test.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
