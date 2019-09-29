import Carousels from './Carousels.vue';

/* istanbul ignore next */
Carousels.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Carousels.name, Carousels);
};

export default Carousels;