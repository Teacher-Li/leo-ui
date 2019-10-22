import Vue from 'vue';
import App from './App.vue';
import router from "./router";

import leo from 'leo-ui';
import mixins from './mixins';

import './styles/index.less';

Vue.mixin(mixins);
Vue.use(leo, { prefixCls: 'document' });

Vue.config.productionTip = false;
Vue.prototype.$Version = leo.version;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
