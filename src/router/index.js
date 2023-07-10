import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //网站主页，入口
  {
    path: '/',
    name: 'home',
    component: () => import('../views/OfficialWebView/HomeView.vue')
  },
    //关于，网站blog
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/OfficialWebView/AboutView.vue')
  },
    //下载，陈列提供各可执行文件
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
