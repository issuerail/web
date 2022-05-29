const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/PageDashboard.vue'),
      },
      {
        path: '/issues/:issueId',
        component: () => import('pages/PageIssue.vue'),
        props: ({ params }) => ({ issueId: Number.parseInt(params.issueId, 10) || 0 }),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/PageError.vue'),
  }
];

export default routes;
