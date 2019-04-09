import Vue from 'vue'
import Router from 'vue-router'
// 路由组件的引入

import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Detail from '@/components/Detail'
import PersonOnly from '@/components/PersonOnly'

Vue.use(Router)

const vueRouter =  new Router({
  routes: [
    // 重定向
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 一般加载
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    // 路由懒加载
    {
      path: '/person',
      name: 'person',
      component: resolve => require(['@/components/Person'],resolve),
      meta:{
        hasPermission:true
      },
      children:[
        {
          path:'/only/:id',
          name:'only',
          component:PersonOnly,
          meta:{
            hasPermission:true
          }
        }
      ]
    },
    // 带参数的路由 params
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta:{
        hasPermission:true
      }
    },
    // 带参数的路由 query
    {
      path: '/detail2',
      name: 'detail2',
      component: Detail,
      meta:{
        hasPermission:true
      }
    },
  ]
})


export default vueRouter;
// 导航守卫
vueRouter.beforeEach((to,from,next)=>{
  if(to.matched.some(res=>res.meta.hasPermission)){
    if(localStorage.getItem('isLogin')){
      // 正常执行
      next();
    }else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      }) 
    }
  }else {
    next();
  }  
})
// 正常执行的条件:数组的某一项拥有meta.hasPermission且为true，路由进入，否则重定向
