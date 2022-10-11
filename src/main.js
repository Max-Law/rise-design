import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { RiseDesign } from 'vue-rise-design';
import RiseRealize from './plugins/rise.config';

Vue.config.productionTip = false;
Vue.use(ElementUI).use(RiseRealize).use(RiseDesign);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
