/*
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-29 17:31:36
 */
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const LoadingComponent = {
  template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
}
const ErrorComponent = {
  template: `
    <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
}
const getAsyncComponent = (func:any) => {
  return defineAsyncComponent({
    loader: func,
    delay: 0,
    timeout: 30000,
    errorComponent: ErrorComponent,
    loadingComponent: LoadingComponent,
  })
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/devFramework'
  },
  {
    path: '/home',
    name: '首页',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
    children:[
      {
        path:'devFramework',
        name:'开发框架',
        component: getAsyncComponent(() => import(/* webpackChunkName: "index" */ '../views/devFramework/index.vue')),
    },
    {
      path:'npm',
      name:'npm管控',
      component: getAsyncComponent(() => import(/* webpackChunkName: "index" */ '../views/npm/index.vue')),
    },
    {
      path:'gitlab',
      name:'代码库',
      component: getAsyncComponent(() => import(/* webpackChunkName: "index" */ '../views/gitlab/index.vue')),
    }
  ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
