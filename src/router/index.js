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
  //   //在线平台，进入前需要检测登录
  // {
  //   path: '/online',
  //   name: 'online',
  //   component: () => import('../views/UsageView/OnlineView.vue')
  // },
  //   //用户中心，进入前需要检测登录
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: () => import('../views/UsageView/UserView.vue')
  // },
  //   //登录入口，提供管理员和使用者登录
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/UsageView/LoginView.vue')
  // },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
