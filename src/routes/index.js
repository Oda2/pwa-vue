import Vue from 'vue';
import Router from 'vue-router';

import root from './root';

Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'hash',
  routes: root,
  linkActiveClass: 'active',
});

export default router;
