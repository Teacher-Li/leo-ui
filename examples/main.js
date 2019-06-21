import Vue from 'vue'
import App from './App.vue'

// import plug from '../lib/leo-ui.umd';
// import '../lib/leo-ui.css';
import plug from '../packages/index';

Vue.use(plug);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
