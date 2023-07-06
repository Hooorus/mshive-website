import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/OfficialWebView/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/OfficialWebView/AboutView.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/OfficialWebView/DownloadView.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
