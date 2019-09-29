import Masonry from './Masonry.vue';

/* istanbul ignore next */
Masonry.install = Vue => {
    if (!Vue.prototype.$PrefixCls) {
        Vue.prototype.$PrefixCls = 'leo';
    }
    Vue.component(Masonry.name, Masonry);
};

export default Masonry;