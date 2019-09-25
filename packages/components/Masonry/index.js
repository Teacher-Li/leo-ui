import Masonry from './Masonry.vue';

/* istanbul ignore next */
Masonry.install = Vue => {
    if (!Vue.prototype.$prefix) {
        Vue.prototype.$prefix = 'leo';
    }
    Vue.component(Masonry.name, Masonry);
};

export default Masonry;