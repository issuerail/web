import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ListPage.vue') }],
  },
  {
    path: '/issue',
    component: () => import('layouts/IssueLayout.vue'),
    children: [{ path: '', component: () => import('pages/IssuePage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorPage.vue'),
  }
];

export default routes;
