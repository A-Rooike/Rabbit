import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    component: () => import('@/views/home/index')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index'),
    meta: {
      showTop: false
    }
  },
  {
    path: '/category',
    name: '分类',
    component: () => import('@/views/category/index'),
    children: [
      {
        path: 'sub',
        name: '二级分类',
        component: () => import('@/views/category/sub/index')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
