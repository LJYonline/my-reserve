import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/views/appCommon/index.vue'),
    name: 'appCommon',
    path: '/appCommon',
  },
  {
    component: () => import('@/views/appEnter/index.vue'),
    name: 'appEnter',
    path: '/appEnter',
  },
  {
    component: () => import('@/views/appEnterSuccess/index.vue'),
    name: 'appEnterSuccess',
    path: '/appEnterSuccess',
  },
  {
    component: () => import('@/views/appSearch/index.vue'),
    name: 'appSearch',
    path: '/appSearch',
  },
  {
    component: () => import('@/views/appSearchCancel/index.vue'),
    name: 'appSearchCancel',
    path: '/appSearchCancel',
  },
  {
    component: () => import('@/views/appSearchLater/index.vue'),
    name: 'appSearchLater',
    path: '/appSearchLater',
  },
  {
    component: () => import('@/views/appSearchOver/index.vue'),
    name: 'appSearchOver',
    path: '/appSearchOver',
  },
  {
    component: () => import('@/views/appSearchUser/index.vue'),
    name: 'appSearchUser',
    path: '/appSearchUser',
  },
  {
    component: () => import('@/views/appSign/index.vue'),
    name: 'appSign',
    path: '/appSign',
  },
  {
    component: () => import('@/views/hello/index.vue'),
    name: 'hello',
    path: '/hello',
  },
  {
    component: () => import('@/views/svgIcons/index.vue'),
    name: 'svgIcons',
    path: '/svgIcons',
  },
  {
    path: '/',
    redirect: '/appEnter'
  },
];
const router = new Router({
  mode: 'hash',
  routes,
});
export default router;
