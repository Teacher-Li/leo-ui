import Vue from 'vue'
import App from './App.vue'

import plug from '../packages/index';

import '../packages/styles/index.less';

Vue.use(plug);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
