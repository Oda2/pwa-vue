import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import store from './store';
import router from './routes';

import './styles/style.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
