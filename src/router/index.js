import { createRouter, createWebHashHistory } from 'vue-router'

// 懒加载  /* webpackChunkName: "xxx" */  注意~这句注释必须加
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@components/layout/index.vue'),
    redirect: '/search',
    meta: {
      title: 'Seine'
    },
    children: [
      {
        path: 'search',
        name: 'search',
        component: () => import('@views/search/index.vue'),
        meta: {
          title: '搜索'
        },
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('@views/order/index.vue'),
        meta: {
          title: '订单',
        },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const setPageTitle = (title) => {
  // 兼容iphone手机title不会改变
  if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
    document.title = title
    const i = document.createElement('iframe')
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(() => {
        i.remove()
      }, 17)
    }
    document.body.appendChild(i)
  } else {
    document.title = title
  }
}

router.beforeEach(
  ( to, from, next ) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      setPageTitle(to.meta.title)
    }
    next()
  },
)

export default router
