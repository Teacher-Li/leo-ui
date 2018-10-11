import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './style/index.less';

require('./utils/prototype');

import mixins from './utils/mixins'
Vue.mixin(mixins);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
