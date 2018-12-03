import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      public: true,
    },
  },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          public: false,
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
  },
];
